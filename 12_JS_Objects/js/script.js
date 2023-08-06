console.log("JS Objects");


var laptop = {
    ram: 6,
    rom: 128,
    processor: "2.5 GHS",
    generation: 11,
    type: "HP",
    color: "silver",
    size: 14
};


var laptops = [                      //         laptops[0].ram;
    {
        ram: 6,
        rom: 128,
        processor: "2.5 GHS",
        generation: 11,
        type: "HP",
        color: "silver",
        size: 14
    },
    {
        ram: 8,
        rom: 128,
        processor: "2.5 GHS",
        generation: 11,
        type: "LENOVO",
        color: "silver",
        size: 14
    },
    {
        ram: 12,
        rom: 128,
        processor: "2.5 GHS",
        generation: 11,
        type: "ASUS",
        color: "silver",
        size: 14
    }
];

// ARRAY+FOR+IF

for (var i = 0; i < laptops.length; i++) {
    // if (laptops[i].type == "LENOVO" || laptops[i].type == "ASUS") {
    //     console.log(laptops[i]);
    // }

    if (laptops[i].ram == 6) {
        console.log(laptops[i])
    }
}


//laptop
//1
// more than 1

//ram, rom, processor, generation, type, color, size;