"use strict"
$(document).ready(function() {
console.log ("ready ")



$("#strBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterStr").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalAttr").text());
	$("#counterTotalAttr").text(total+clickbtn)
	$("#counterStr").text(count+clickbtn)
	return

})

$("#strBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterStr").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalAttr").text());
	 if (count >10){
 		$("#counterTotalAttr").text(total+clickbtn)
	 	$("#counterStr").text(count+clickbtn)
	 	return
	 }

	 if (count <=10){
	 
	 	 	return $("#counterStr").text(count)
	 }

})

$("#finBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterFin").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalAttr").text());
	$("#counterTotalAttr").text(total+clickbtn)
	$("#counterFin").text(count+clickbtn)
	return

})

$("#finBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterFin").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalAttr").text());
	 if (count >10){
	 	$("#counterTotalAttr").text(total+clickbtn)
	 	$("#counterFin").text(count+clickbtn)
	 	return
	 }

	 if (count <=10){
	 
	 	 	return $("#counterFin").text(count)
	 }

})

$("#intBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterInt").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalAttr").text());
	$("#counterTotalAttr").text(total+clickbtn)
	$("#counterInt").text(count+clickbtn)
	return

})


$("#intBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterInt").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalAttr").text());
	 if (count >10){
	 	$("#counterTotalAttr").text(total+clickbtn)
	 	$("#counterInt").text(count+clickbtn)
	 	return
	 }

	 if (count <=10){
	 
	 	 	return $("#counterInt").text(count)
	 }

})

$("#conBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterCon").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalAttr").text());
	$("#counterTotalAttr").text(total+clickbtn)
	$("#counterCon").text(count+clickbtn)
	return

})

$("#conBtnMinus").click (function(count, clickbtn,total){
	var count = parseInt($("#counterCon").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalAttr").text());
	 if (count >10){
	 	$("#counterTotalAttr").text(total+clickbtn)
	 	$("#counterCon").text(count+clickbtn)
	 	return
	 }

	 if (count <=10){
	 
	 	 	return $("#counterCon").text(count)
	 }

})

$("#memBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterMem").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalAttr").text());
	$("#counterTotalAttr").text(total+clickbtn)
	$("#counterMem").text(count+clickbtn)
	return

})


$("#memBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterMem").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalAttr").text());
	 if (count >10){
	 		$("#counterTotalAttr").text(total+clickbtn)
	 	 	$("#counterMem").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=10){
	 
	 	 	return $("#counterMem").text(count)
	 }

})

$("#witBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterWit").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalAttr").text());
	$("#counterTotalAttr").text(total+clickbtn)
	$("#counterWit").text(count+clickbtn)

	return

})

$("#witBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterWit").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalAttr").text());

	 if (count >10){
 			$("#counterTotalAttr").text(total+clickbtn)
	 	 	$("#counterWit").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=10){
	 	 	return $("#counterWit").text(count)
	 }

})


$("#dwBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterDw").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalWep").text());
	$("#counterTotalWep").text(total+clickbtn)
	$("#counterDw").text(count+clickbtn)

	return

})

$("#dwBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterDw").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalWep").text());

	 if (count >0){
 			$("#counterTotalWep").text(total+clickbtn)
	 	 	$("#counterDw").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterDw").text(count)
	 }

})

$("#ranBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterRan").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalWep").text());
	$("#counterTotalWep").text(total+clickbtn)
	$("#counterRan").text(count+clickbtn)

	return

})

$("#ranBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterRan").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalWep").text());

	 if (count >0){
 			$("#counterTotalWep").text(total+clickbtn)
	 	 	$("#counterRan").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterRan").text(count)
	 }

})

$("#shBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterSh").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalWep").text());
	$("#counterTotalWep").text(total+clickbtn)
	$("#counterSh").text(count+clickbtn)

	return

})

$("#shBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterSh").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalWep").text());

	 if (count >0){
 			$("#counterTotalWep").text(total+clickbtn)
	 	 	$("#counterSh").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterSh").text(count)
	 }

})

$("#thBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterTh").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalWep").text());
	$("#counterTotalWep").text(total+clickbtn)
	$("#counterTh").text(count+clickbtn)

	return

})

$("#thBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterTh").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalWep").text());

	 if (count >0){
 			$("#counterTotalWep").text(total+clickbtn)
	 	 	$("#counterTh").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterTh").text(count)
	 }

})

$("#leadBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterLead").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalDef").text());
	$("#counterTotalDef").text(total+clickbtn)
	$("#counterLead").text(count+clickbtn)

	return

})

$("#leadBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterLead").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalDef").text());

	 if (count >0){
 			$("#counterTotalDef").text(total+clickbtn)
	 	 	$("#counterLead").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterLead").text(count)
	 }

})

$("#persBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterPers").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalDef").text());
	$("#counterTotalDef").text(total+clickbtn)
	$("#counterPers").text(count+clickbtn)

	return

})

$("#persBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterPers").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalDef").text());

	 if (count >0){
 			$("#counterTotalDef").text(total+clickbtn)
	 	 	$("#counterPers").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterPers").text(count)
	 }

})

$("#prefBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterPref").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalDef").text());
	$("#counterTotalDef").text(total+clickbtn)
	$("#counterPref").text(count+clickbtn)

	return

})

$("#prefBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterPref").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalDef").text());

	 if (count >0){
 			$("#counterTotalDef").text(total+clickbtn)
	 	 	$("#counterPref").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterPref").text(count)
	 }

})


$("#aeroBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterAero").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalSkills").text());
	$("#counterTotalSkills").text(total+clickbtn)
	$("#counterAero").text(count+clickbtn)

	return

})

$("#aeroBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterAero").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalSkills").text());

	 if (count >0){
 			$("#counterTotalSkills").text(total+clickbtn)
	 	 	$("#counterAero").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterAero").text(count)
	 }

})

$("#geoBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterGeo").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalSkills").text());
	$("#counterTotalSkills").text(total+clickbtn)
	$("#counterGeo").text(count+clickbtn)

	return

})

$("#geoBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterGeo").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalSkills").text());

	 if (count >0){
 			$("#counterTotalSkills").text(total+clickbtn)
	 	 	$("#counterGeo").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterGeo").text(count)
	 }

})


$("#huntBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterHunt").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalSkills").text());
	$("#counterTotalSkills").text(total+clickbtn)
	$("#counterHunt").text(count+clickbtn)

	return

})

$("#huntBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterHunt").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalSkills").text());

	 if (count >0){
 			$("#counterTotalSkills").text(total+clickbtn)
	 	 	$("#counterHunt").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterHunt").text(count)
	 }

})

$("#hydroBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterHydro").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalSkills").text());
	$("#counterTotalSkills").text(total+clickbtn)
	$("#counterHydro").text(count+clickbtn)

	return

})

$("#hydroBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterHydro").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalSkills").text());

	 if (count >0){
 			$("#counterTotalSkills").text(total+clickbtn)
	 	 	$("#counterHydro").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterHydro").text(count)
	 }

})

$("#necrBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterNecr").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalSkills").text());
	$("#counterTotalSkills").text(total+clickbtn)
	$("#counterNecr").text(count+clickbtn)

	return

})

$("#necrBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterNecr").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalSkills").text());

	 if (count >0){
 			$("#counterTotalSkills").text(total+clickbtn)
	 	 	$("#counterNecr").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterNecr").text(count)
	 }

})

$("#pyroBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterPyro").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalSkills").text());
	$("#counterTotalSkills").text(total+clickbtn)
	$("#counterPyro").text(count+clickbtn)

	return

})

$("#pyroBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterPyro").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalSkills").text());

	 if (count >0){
 			$("#counterTotalSkills").text(total+clickbtn)
	 	 	$("#counterPyro").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterPyro").text(count)
	 }

})


$("#scoBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterSco").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalSkills").text());
	$("#counterTotalSkills").text(total+clickbtn)
	$("#counterSco").text(count+clickbtn)

	return

})

$("#scoBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterSco").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalSkills").text());

	 if (count >0){
 			$("#counterTotalSkills").text(total+clickbtn)
	 	 	$("#counterSco").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterSco").text(count)
	 }

})

$("#warBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterWar").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalSkills").text());
	$("#counterTotalSkills").text(total+clickbtn)
	$("#counterWar").text(count+clickbtn)

	return

})

$("#warBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterWar").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalSkills").text());

	 if (count >0){
 			$("#counterTotalSkills").text(total+clickbtn)
	 	 	$("#counterWar").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterWar").text(count)
	 }

})

$("body").click(function(totalWep,totalDef, totalSkills , totalCombatSkills){
	var totalWep = parseInt($("#counterTotalWep").text())
	var totalDef = parseInt($("#counterTotalDef").text())
	var totalSkills = parseInt($("#counterTotalSkills").text())
	var totalCombatSkills = parseInt($("#counterTotalCombatSkills").text())
	var sum = totalWep+totalDef+totalSkills
	console.log (sum)

	if (sum != totalCombatSkills ){
		($("#counterTotalCombatSkills").text(sum))

	}
		return
})

$("#bartBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterBart").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalPers").text());
	$("#counterTotalPers").text(total+clickbtn)
	$("#counterBart").text(count+clickbtn)

	return

})

$("#bartBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterBart").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalPers").text());

	 if (count >0){
 			$("#counterTotalPers").text(total+clickbtn)
	 	 	$("#counterBart").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterBart").text(count)
	 }

})

$("#luckBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterLuck").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalPers").text());
	$("#counterTotalPers").text(total+clickbtn)
	$("#counterLuck").text(count+clickbtn)

	return

})

$("#luckBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterLuck").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalPers").text());

	 if (count >0){
 			$("#counterTotalPers").text(total+clickbtn)
	 	 	$("#counterLuck").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterLuck").text(count)
	 }

})


$("#persuasionBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterPersuasion").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalPers").text());
	$("#counterTotalPers").text(total+clickbtn)
	$("#counterPersuasion").text(count+clickbtn)

	return

})

$("#persuasionBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterPersuasion").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalPers").text());

	 if (count >0){
 			$("#counterTotalPers").text(total+clickbtn)
	 	 	$("#counterPersuasion").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterPersuasion").text(count)
	 }

})

$("#loreBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterLore").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalCraft").text());
	$("#counterTotalCraft").text(total+clickbtn)
	$("#counterLore").text(count+clickbtn)

	return

})

$("#loreBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterLore").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalCraft").text());

	 if (count >0){
 			$("#counterTotalCraft").text(total+clickbtn)
	 	 	$("#counterLore").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterLore").text(count)
	 }

})

$("#teleBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterTele").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalCraft").text());
	$("#counterTotalCraft").text(total+clickbtn)
	$("#counterTele").text(count+clickbtn)

	return

})

$("#teleBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterTele").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalCraft").text());

	 if (count >0){
 			$("#counterTotalCraft").text(total+clickbtn)
	 	 	$("#counterTele").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterTele").text(count)
	 }

})


$("#sneakBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterSneak").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalNasty").text());
	$("#counterTotalNasty").text(total+clickbtn)
	$("#counterSneak").text(count+clickbtn)

	return

})

$("#sneakBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterSneak").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalNasty").text());

	 if (count >0){
 			$("#counterTotalNasty").text(total+clickbtn)
	 	 	$("#counterSneak").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterSneak").text(count)
	 }

})


$("#thieveryBtnPlus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterThievery").text()); 
	var clickbtn = 1;
	var total = parseInt($("#counterTotalNasty").text());
	$("#counterTotalNasty").text(total+clickbtn)
	$("#counterThievery").text(count+clickbtn)

	return

})

$("#thieveryBtnMinus").click (function(count, clickbtn, total){
	var count = parseInt($("#counterThievery").text()); 
	var clickbtn = -1;
	var total = parseInt($("#counterTotalNasty").text());

	 if (count >0){
 			$("#counterTotalNasty").text(total+clickbtn)
	 	 	$("#counterThievery").text(count+clickbtn)
	 	 	return
	 }

	 if (count <=0){
	 	 	return $("#counterThievery").text(count)
	 }

})


$("body").click(function(totalPers,totalCraft, totalNasty , totalCivilSkills){
	var totalPers = parseInt($("#counterTotalPers").text())
	var totalCraft = parseInt($("#counterTotalCraft").text())
	var totalNasty = parseInt($("#counterTotalNasty").text())
	var totalCivilSkills = parseInt($("#counterTotalCivilSkills").text())
	var sum = totalPers+totalCraft+totalNasty
	console.log (sum)

	if (sum != totalCivilSkills ){
		($("#counterTotalCivilSkills").text(sum))

	}
		return
})


$("#glassCanonTalent").click(function(){
	$("#glassCanonTalent").toggleClass("setGreen")
}
)

})
// если будут проблемы с отрицательным total
// if (total<=0){
// 	 		$("#counterTotalAttr").text(total)
// 	 }


// $("#thieveryBtnPlus").click (function(count, clickbtn, total){
// 	var count = parseInt($("#counterThievery").text()); 
// 	var clickbtn = 1;
// 	var total = parseInt($("#counterTotalNasty").text());
// 	$("#counterTotalNasty").text(total+clickbtn)
// 	$("#counterThievery").text(count+clickbtn)

// 	return

// })