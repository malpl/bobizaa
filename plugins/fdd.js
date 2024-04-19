cmd({
        pattern: "تصفيه",
        alias : ['تدمير'],
        desc: "Kick all numbers from a certain country",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => 
    {	
        if (!citel.isGroup) return citel.reply(tlang().group);
	if(!text) return await citel.reply("*֎╎اكـتـب كـود دولـه لـطـردهـا مـثـال┇.تدمير 91*")
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
	const groupAdmins = await getAdmin(Void, citel)
        let isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) :  false  ;
        if (!isAdmins)
	{
		if(isCreator) citel.reply("*֎╎اسـف يـا مـطـوري انـت لـسـت مـشـرف هـنـا*")
		else return citel.reply(tlang().admin);
	}
	let find = text.split(" ")[0].replace('+' , '');
	let error = '*֎╎هـدول الاعـضـاء لـم يـتـم تـدمـيـرهـم* \n\t' ;
	let users = await groupMetadata.participants
	let hmanykik = 0;
	let iskikstart = false ;
	const botNumber = await Void.decodeJid(Void.user.id)
	for (let i of users) { 
		let isuseradmin  =  groupAdmins.includes(i.id) || false 
		if(i.id.startsWith(find) && !isuseradmin)
		{ 
			if(!iskikstart)
			{
				iskikstart = true ;
				await citel.reply(`*֎╎تـدمـيـر جـمـيـع الاعـضـاء لـدولـه ${find}*`)
			}
			try { await Void.groupParticipantsUpdate(citel.chat, [i.id], "remove"); hmanykik++ ;  }
			catch (e) { console.log("*֎╎خـطـأ فـي تـدمـيـر الاعـضـاء*" , e) } 	
		}
	}
	if(hmanykik == 0) return await citel.reply(`*֎╎لا يـوجـد اعـضـاء لـكـود دولـه ${find}*`)
        else return await citel.reply(`*هـلا, ${hmanykik.toString()} الاعـضـاء لـكـود دولـه ${find} تـم طـردهـم*`)
})

//---------------------------------------------------------------------------
cmd({
        pattern: "ارقام",
        desc: "get all numbers from a certain country",
        category: "group",
        filename: __filename,
    },
    async(Void, citel, text,{ isCreator }) => 
    {	
        if (!citel.isGroup) return citel.reply(tlang().group);
	if(!text) return await citel.reply("*֎╎اكـتـب كـود دولـه لـجـلـبـها مـثـال┇.تدمير 91*")
        const groupMetadata = citel.isGroup ? await Void.groupMetadata(citel.chat).catch((e) => {}) : "";
	const groupAdmins = await getAdmin(Void, citel)
        const isAdmins = citel.isGroup ? groupAdmins.includes(citel.sender) :  false  ;
        if (!isAdmins && !isCreator ) return citel.reply(tlang().admin);
	let find = text.split(" ")[0];
	let users = await groupMetadata.participants
	let nums = `*֎╎قـائـمـه الاعـضـاء لـكـود دولـه ${find}*\n`
	let num = '';
	for (let i of users) {  if(i.id.startsWith(find)) num += i.id.split("@")[0] +"\n";   }
	if(!num) {nums =`*֎╎لا يـوجـد اعـضـاء لـكـود دولـه ${find}*` }
	else { nums += num+Config.author }
	await citel.reply(nums)		
})
