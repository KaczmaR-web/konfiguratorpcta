const mb = [
    {
        id: 1,
        name: "Gigabyte B450 AORUS ELITE",
        price: 409,
        img:"Gigabyte B450 AORUS ELITE.jpg"

    },
    {
        id: 2,
        name:"MSI MAG X570 TOMAHAWK WIFI",
        price: 769,
        img:"MSI MAG X570 TOMAHAWK WIFI.jpg"
    },
    {
        id:3,
        name: "ASUS ROG STRIX X570-E GAMING",
        price: 239,
        img:"ASUS ROG STRIX X570-E GAMING.jpg"
    }
]
const gfx = [
    {
        id: 1,
        name: "Gigabyte GeForce GTX 1050Ti Windforce OC 4GB GDDR5 (GV-N105TOC-4GD)",
        price: 639,
        img:"Gigabyte GeForce GTX 1050Ti Windforce OC 4GB GDDR5 (GV-N105TOC-4GD).jpg"

    },
    {
        id: 2,
        name:"Gigabyte GeForce GTX 1660 OC 6GB GDDR5 (GV-N1660OC-6GD)",
        price: 939,
        img:"Gigabyte GeForce GTX 1660 OC 6GB GDDR5 (GV-N1660OC-6GD).jpg"
    },
    {
        id:3,
        name: "MSI GeForce GTX 1650 D6 Gaming X 4GB GDDR6 (GTX 1650 D6 GAMING X)",
        price: 745,
        img:"MSI GeForce GTX 1650 D6 Gaming X 4GB GDDR6 (GTX 1650 D6 GAMING X).jpg"
    }
]
const cpu = [
    {
        id: 1,
        name: "Intel Core i9-10850K, 3.6GHz, 20 MB, BOX (BX8070110850K)",
        price: 1749,
        img:"Intel Core i9-10850K, 3.6GHz, 20 MB, BOX (BX8070110850K).jpg"

    },
    {
        id: 2,
        name:"Intel Core i7-10700K, 3.8GHz, 16 MB, BOX (BX8070110700K)",
        price: 699,
        img:"Intel Core i7-10700K, 3.8GHz, 16 MB, BOX (BX8070110700K).jpg"
    },
    {
        id:3,
        name: "Intel Core i5-10400F, 2.9GHz, 12 MB, BOX (BX8070110400F)",
        price: 929,
        img:"Intel Core i5-10400F, 2.9GHz, 12 MB, BOX (BX8070110400F).jpg"
    }
]
const ram =[
    {
        id:1,
        name: "Corsair Vengeance RGB PRO, DDR4, 16 GB, 3200MHz",
        price: 359,
        img:"Corsair Vengeance RGB PRO, DDR4, 16 GB, 3200MHz.jpg"
    },
    {
        id:2,
        name: "HyperX Fury RGB, DDR4, 16 GB, 3200MHz",
        price: 349,
        img:"HyperX Fury RGB, DDR4, 16 GB, 3200MHz.jpg"
    },
    {
        id:3,
        name: "Crucial Ballistix Black at DDR4 3200 DRAM",
        price: 309,
        img: "Crucial Ballistix Black at DDR4 3200 DRAM.jpg"
    },
    {
        id:4,
        name: "G.Skill Trident Z RGB, DDR4, 16 GB, 3200MHz, CL16",
        price: 409,
        img: "G.Skill Trident Z RGB, DDR4, 16 GB, 3200MHz, CL16.jpg"
    }
]
const zas =[
    {
        id:1,
        name:"SilentiumPC Vero M3 600W",
        price: 256,
        img:"SilentiumPC Vero M3 600W.jpg"

    },
    {
        id:2,
        name:"be quiet! Straight Power 11 750W",
        price: 619,
        img:"be quiet! Straight Power 11 750W.jpg"
    },
    {
        id:3,
        name:"Thermaltake Smart 730W",
        price: 349,
        img:"Thermaltake Smart 730W.jpg"
    },
    {
        id:4,
        name:"Thermaltake Smart 500W RGB",
        price: 238,
        img:"Thermaltake Smart 500W RGB.jpg"
    }
]
const obd =[
    {
        id:1,
        name:"SilentiumPC Regnum RG4TF",
        price: 209,
        img:"SilentiumPC Regnum RG4TF.jpg"
    },
    {
        id:2,
        name:"MSI MAG Forge 100M",
        price: 209,
        img:"MSI MAG Forge 100M.jpg"
    },
    {
        id:3,
        name:"Genesis Irid 400 ARGB",
        price: 359,
        img:"Genesis Irid 400 ARGB.jpg"
    },
    {
        id:4,
        name:"SilentiumPC Signum SG7V Evo TG ARGB",
        price: 389,
        img: "SilentiumPC Signum SG7V Evo TG ARGB.jpg"
    }
]
const mon =[
    {
        id:1,
        name:"Samsung S24R350",
        price: 529,
        img:"Samsung S24R350.jpg"
    },
    {
        id:2,
        name: "iiyama G-Master Black Hawk G2530HSU-B1",
        price: 599,
        img: "iiyama G-Master Black Hawk G2530HSU-B1.jpg"
    },
    {
        id:3,
        name: "Acer Nitro VG272Pbmiipx",
        price: 1049,
        img: "Acer Nitro VG272Pbmiipx.jpg"
    },
    {
        id:4,
        name: "LG UltraGear 27GL63T-B",
        price: 1049,
        img: "LG UltraGear 27GL63T-B.jpg"
    }
]
const kla =[
    {
        id:1,
        name:"Klawiatura Corsair K55 RGB (CH-9206015-NA)",
        price: 219,
        img:"Klawiatura Corsair K55 RGB (CH-9206015-NA).jpg"
    },
    {
        id:2,
        name:"Klawiatura SPC Gear GK540 Magna (SPG019)",
        price: 239,
        img:"Klawiatura SPC Gear GK540 Magna (SPG019).jpg"
    },
    {
        id:3,
        name:"Klawiatura Logitech G213 Prodigy (920-008093)",
        price: 225,
        img:"Klawiatura Logitech G213 Prodigy (920-008093).jpg",
    },
    {
        id:4,
        name:"Klawiatura HyperX Alloy Elite II RGB (HKBE2X-1X-US/G)",
        price: 659,
        img: "Klawiatura HyperX Alloy Elite II RGB (HKBE2X-1X-US/G).jpg",
    }
]
var cart = [
    {
        name: 'mainboard',
        price:0
    },
    {
        name: 'graphic card',
        price:0
    },
    {
        name:'processor',
        price:0
    },
    {
        name:'ram',
        price:0
    },
    {
        name:'zas',
        price:0
    },
    {
        name:'obd',
        price:0
    },
    {
        name:'mon',
        price:0
    },
    {
        name:'kla',
        price:0
    }

]
let summaryCompHandler = document.getElementById("summaryComp");

function addOpt(elem, optValue, textOpt) {
    let select1 = document.getElementById(elem);  // pobranie id miejsca do dodania opcji
    let option = document.createElement( "option"); //utworzenie elementu option
    option.setAttribute( "value", optValue); //dodaje atrybut value
    const textOption = document.createTextNode(textOpt);  // tekst do opcji
    option.appendChild(textOption); // dodanie tekstu do opcji
    select1.appendChild(option); // finalizacja dodanie opcji
}
function SelectedItemValue(SelectId){
    const selectedItem = document.getElementById(SelectId)
    let strAtt = selectedItem.options[selectedItem.selectedIndex].getAttribute('value');
    console.log("Wybrany element ma ID:"+strAtt);

    const summaryCPU = document.getElementById("summaryCpu");
    const summaryMb = document.getElementById("summaryMb");
    const summaryGfx = document.getElementById("summaryGfx");
    const summaryRam = document.getElementById("summaryRam");
    const summaryZas= document.getElementById("summaryZas");
    const summaryObd= document.getElementById("summaryObd");
    const summaryMon= document.getElementById("summaryMon");
    const summaryKla= document.getElementById("summaryKla");

    if (SelectId == "cpu") {
        summaryCPU.innerHTML ="</td><img src='img/"+ cpu[strAtt - 1].img+"'></td>"+"<td>"+cpu[strAtt - 1].name + "</td><td>" + cpu[strAtt - 1].price
        cart[2].price = cpu[strAtt - 1].price
        cart[2].name = cpu[strAtt - 1].name
    }
    else if (SelectId == "mb") {
        summaryMb.innerHTML ="</td><img src='img/"+ mb[strAtt - 1].img+"'></td>"+"<td>"+mb[strAtt - 1].name + "</td><td>" + mb[strAtt - 1].price
        cart[0].price = mb[strAtt - 1].price
        cart[0].name = mb[strAtt - 1].name
        document.getElementById("summaryMainboard").innerHTML
    }  else if (SelectId == "gfx") {
        summaryGfx.innerHTML ="</td><img src='img/"+ gfx[strAtt - 1].img+"'></td>"+"<td>"+gfx[strAtt - 1].name + "</td><td>" + gfx[strAtt - 1].price
        cart[1].price = gfx[strAtt - 1].price
        cart[1].name = gfx[strAtt - 1].name
    } else if (SelectId == "ram") {
        summaryRam.innerHTML = "</td><img src='img/" + ram[strAtt - 1].img + "'></td>" + "<td>" + ram[strAtt - 1].name + "</td><td>" + ram[strAtt - 1].price
        cart[3].price = ram[strAtt - 1].price
        cart[3].name = ram[strAtt - 1].name
    } else if (SelectId == "zas") {
        summaryZas.innerHTML = "</td><img src='img/" + zas[strAtt - 1].img + "'></td>" + "<td>" + zas[strAtt - 1].name + "</td><td>" + zas[strAtt - 1].price
        cart[4].price = zas[strAtt - 1].price
        cart[4].name = zas[strAtt - 1].name
    } else if (SelectId == "obd") {
        summaryObd.innerHTML = "</td><img src='img/" + obd[strAtt - 1].img + "'></td>" + "<td>" + obd[strAtt - 1].name + "</td><td>" + obd[strAtt - 1].price
        cart[5].price = obd[strAtt - 1].price
        cart[5].name = obd[strAtt - 1].name
    }else if (SelectId == "mon") {
        summaryMon.innerHTML = "</td><img src='img/" + mon[strAtt - 1].img + "'></td>" + "<td>" + mon[strAtt - 1].name + "</td><td>" + mon[strAtt - 1].price
        cart[6].price = mon[strAtt - 1].price
        cart[6].name = mon[strAtt - 1].name
    }else if (SelectId == "Kla") {
        summaryKla.innerHTML = "</td><img src='img/" + kla[strAtt - 1].img + "'></td>" + "<td>" + kla[strAtt - 1].name + "</td><td>" + kla[strAtt - 1].price
        cart[7].price = kla[strAtt - 1].price
        cart[7].name = kla[strAtt - 1].name
    }
    else
    {}
    document.getElementById("sumAll").innerHTML="<b>Suma koszyka:"+ (cart[0].price+cart[1].price+cart[2].price+cart[3].price+cart[4].price+cart[5].price+cart[6].price+cart[7].price) + "</b>"
}


for(let i=0; i<mb.length; i++) {
    addOpt("mb" , mb[i].id, mb[i].name)
}
for(let i=0; i<gfx.length; i++) {
    addOpt("gfx" , gfx[i].id, gfx[i].name)
}
for(let i=0; i<cpu.length; i++) {
    addOpt("cpu" , cpu[i].id, cpu[i].name)
}
for(let i=0; i<ram.length; i++) {
    addOpt("ram", ram[i].id, ram[i].name)
}
for(let i=0; i<zas.length; i++) {
    addOpt("zas", zas[i].id, zas[i].name)
}
for(let i=0; i<obd.length; i++) {
    addOpt("obd", obd[i].id, obd[i].name)
}
for(let i=0; i<mon.length; i++) {
    addOpt("mon", mon[i].id, mon[i].name)
}
for(let i=0; i<kla.length; i++) {
    addOpt("kla", kla[i].id, kla[i].name)
}