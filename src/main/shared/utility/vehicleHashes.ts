import * as alt from 'alt-shared';

const vehicleHashes = {
    adder: 0xb779a091,
    airbus: 0x4c80eb0e,
    airtug: 0x5d0aac8f,
    akula: 0x46699f47,
    akuma: 0x63abade7,
    alkonost: 0xea313705,
    alpha: 0x2db8d1aa,
    alphaz1: 0xa52f6866,
    ambulance: 0x45d56ada,
    annihilator: 0x31f0b376,
    annihilator2: 0x11962e49,
    apc: 0x2189d250,
    ardent: 0x97e5533,
    armytanker: 0xb8081009,
    armytrailer: 0xa7ff33f5,
    armytrailer2: 0x9e6b14d6,
    asbo: 0x42aca95f,
    asea: 0x94204d89,
    asea2: 0x9441d8d5,
    asterope: 0x8e9254fb,
    astron: 0x258c9364,
    autarch: 0xed552c74,
    avarus: 0x81e38f7f,
    avenger: 0x81bd2ed0,
    avenger2: 0x18606535,
    avisa: 0x9a474b5e,
    bagger: 0x806b9cc3,
    baletrailer: 0xe82ae656,
    baller: 0xcfca3668,
    baller2: 0x8852855,
    baller3: 0x6ff0f727,
    baller4: 0x25cbe2e2,
    baller5: 0x1c09cf5e,
    baller6: 0x27b4e6b0,
    baller7: 0x1573422d,
    banshee: 0xc1e908d2,
    banshee2: 0x25c5af13,
    barracks: 0xceea3f4b,
    barracks2: 0x4008eabb,
    barracks3: 0x2592b5cf,
    barrage: 0xf34dfb25,
    bati: 0xf9300cc5,
    bati2: 0xcadd5d2d,
    benson: 0x7a61b330,
    besra: 0x6cbd1d6d,
    bestiagts: 0x4bfcf28b,
    bf400: 0x5283265,
    bfinjection: 0x432aa566,
    biff: 0x32b91ae8,
    bifta: 0xeb298297,
    bison: 0xfefd644f,
    bison2: 0x7b8297c5,
    bison3: 0x67b3f020,
    bjxl: 0x32b29a4b,
    blade: 0xb820ed5e,
    blazer: 0x8125bcf9,
    blazer2: 0xfd231729,
    blazer3: 0xb44f0582,
    blazer4: 0xe5ba6858,
    blazer5: 0xa1355f67,
    blimp: 0xf7004c86,
    blimp2: 0xdb6b4924,
    blimp3: 0xeda4ed97,
    blista: 0xeb70965f,
    blista2: 0x3dee5eda,
    blista3: 0xdcbc1c3b,
    bmx: 0x43779c54,
    boattrailer: 0x1f3d44b5,
    bobcatxl: 0x3fc5d440,
    bodhi2: 0xaa699bb6,
    bombushka: 0xfe0a508c,
    boor: 0x3b639c8d,
    boxville: 0x898eccea,
    boxville2: 0xf21b33be,
    boxville3: 0x7405e08,
    boxville4: 0x1a79847a,
    boxville5: 0x28ad20e1,
    brawler: 0xa7ce1bc5,
    brickade: 0xedc6f847,
    brickade2: 0xa2073353,
    brioso: 0x5c55cb39,
    brioso2: 0x55365079,
    brioso3: 0xe827de,
    broadway: 0x8cc51028,
    bruiser: 0x27d79225,
    bruiser2: 0x9b065c9e,
    bruiser3: 0x8644331a,
    brutus: 0x7f81a829,
    brutus2: 0x8f49ae28,
    brutus3: 0x798682a2,
    btype: 0x6ff6914,
    btype2: 0xce6b35a4,
    btype3: 0xdc19d101,
    buccaneer: 0xd756460c,
    buccaneer2: 0xc397f748,
    buffalo: 0xedd516c6,
    buffalo2: 0x2bec3cbe,
    buffalo3: 0xe2c013e,
    buffalo4: 0xdb0c9b04,
    bulldozer: 0x7074f39d,
    bullet: 0x9ae6dda1,
    burrito: 0xafbb2ca4,
    burrito2: 0xc9e8ff76,
    burrito3: 0x98171bd3,
    burrito4: 0x353b561d,
    burrito5: 0x437cf2a0,
    bus: 0xd577c962,
    buzzard: 0x2f03547b,
    buzzard2: 0x2c75f0dd,
    cablecar: 0xc6c3242d,
    caddy: 0x44623884,
    caddy2: 0xdff0594c,
    caddy3: 0xd227bdbb,
    calico: 0xb8d657ad,
    camper: 0x6fd95f68,
    caracara: 0x4abebf23,
    caracara2: 0xaf966f3c,
    carbonizzare: 0x7b8ab45f,
    carbonrs: 0xabb0c0,
    cargobob: 0xfcfcb68b,
    cargobob2: 0x60a7ea10,
    cargobob3: 0x53174eef,
    cargobob4: 0x78bc1a3c,
    cargoplane: 0x15f27762,
    cargoplane2: 0x8b4864e1,
    casco: 0x3822bdfe,
    cavalcade: 0x779f23aa,
    cavalcade2: 0xd0eb2be5,
    cerberus: 0xd039510b,
    cerberus2: 0x287fa449,
    cerberus3: 0x71d3b6f0,
    champion: 0xc972a155,
    cheburek: 0xc514aae0,
    cheetah: 0xb1d95da0,
    cheetah2: 0xd4e5f4d,
    chernobog: 0xd6bc7523,
    chimera: 0x675ed7,
    chino: 0x14d69010,
    chino2: 0xaed64a63,
    cinquemila: 0xa4f52c13,
    cliffhanger: 0x17420102,
    clique: 0xa29f78b0,
    club: 0x82e47e85,
    coach: 0x84718d34,
    cog55: 0x360a438e,
    cog552: 0x29fcd3e4,
    cogcabrio: 0x13b57d8a,
    cognoscenti: 0x86fe0b60,
    cognoscenti2: 0xdbf2d57a,
    comet2: 0xc1ae4d16,
    comet3: 0x877358ad,
    comet4: 0x5d1903f9,
    comet5: 0x276d98a3,
    comet6: 0x991efc04,
    comet7: 0x440851d8,
    conada: 0xe384dd25,
    contender: 0x28b67aca,
    coquette: 0x67bc037,
    coquette2: 0x3c4e2113,
    coquette3: 0x2ec385fe,
    coquette4: 0x98f65a5e,
    corsita: 0xd3046147,
    cruiser: 0x1aba13b5,
    crusader: 0x132d5a1a,
    cuban800: 0xd9927fe3,
    cutter: 0xc3fba120,
    cyclone: 0x52ff9437,
    cypher: 0x68a5d1ef,
    daemon: 0x77934cee,
    daemon2: 0xac4e93c9,
    deathbike: 0xfe5f0722,
    deathbike2: 0x93f09558,
    deathbike3: 0xae12c99c,
    defiler: 0x30ff0190,
    deity: 0x5b531351,
    deluxo: 0x586765fb,
    deveste: 0x5ee005da,
    deviant: 0x4c3fff49,
    diablous: 0xf1b44f44,
    diablous2: 0x6abdf65e,
    dilettante: 0xbc993509,
    dilettante2: 0x64430650,
    dinghy: 0x3d961290,
    dinghy2: 0x107f392c,
    dinghy3: 0x1e5e54ea,
    dinghy4: 0x33b47f96,
    dinghy5: 0xc58da34a,
    dloader: 0x698521e3,
    docktrailer: 0x806efbee,
    docktug: 0xcb44b1ca,
    dodo: 0xca495705,
    dominator: 0x4ce68ac,
    dominator2: 0xc96b73d9,
    dominator3: 0xc52c6b93,
    dominator4: 0xd6fb0f30,
    dominator5: 0xae0a3d4f,
    dominator6: 0xb2e046fb,
    dominator7: 0x196f9418,
    dominator8: 0x2be8b90a,
    double: 0x9c669788,
    drafter: 0x28eab80f,
    draugur: 0xd235a4a6,
    dubsta: 0x462fe277,
    dubsta2: 0xe882e5f6,
    dubsta3: 0xb6410173,
    dukes: 0x2b26f456,
    dukes2: 0xec8f7094,
    dukes3: 0x7f3415e3,
    dump: 0x810369e2,
    dune: 0x9cf21e0f,
    dune2: 0x1fd824af,
    dune3: 0x711d4738,
    dune4: 0xceb28249,
    dune5: 0xed62bfa9,
    duster: 0x39d6779e,
    dynasty: 0x127e90d5,
    elegy: 0xbba2261,
    elegy2: 0xde3d9d22,
    ellie: 0xb472d2b5,
    emerus: 0x4ee74355,
    emperor: 0xd7278283,
    emperor2: 0x8fc3aadc,
    emperor3: 0xb5fcf74e,
    enduro: 0x6882fa73,
    entity2: 0x8198aedc,
    entity3: 0x6838fc1d,
    entityxf: 0xb2fe5cf9,
    esskey: 0x794cb30c,
    eudora: 0xb581bf9a,
    euros: 0x7980bdd5,
    everon: 0x97553c28,
    everon2: 0xf82bc92e,
    exemplar: 0xffb15b5e,
    f620: 0xdcbcbe48,
    faction: 0x81a9cddf,
    faction2: 0x95466bdb,
    faction3: 0x866bce26,
    fagaloa: 0x6068ad86,
    faggio: 0x9229e4eb,
    faggio2: 0x350d1ab,
    faggio3: 0xb328b188,
    fbi: 0x432ea949,
    fbi2: 0x9dc66994,
    fcr: 0x25676eaf,
    fcr2: 0xd2d5e00e,
    felon: 0xe8a8bda8,
    felon2: 0xfaad85ee,
    feltzer2: 0x8911b9f5,
    feltzer3: 0xa29d6d10,
    firetruk: 0x73920f8e,
    fixter: 0xce23d3bf,
    flashgt: 0xb4f32118,
    flatbed: 0x50b0215a,
    fmj: 0x5502626c,
    forklift: 0x58e49664,
    formula: 0x1446590a,
    formula2: 0x8b213907,
    fq2: 0xbc32a33b,
    freecrawler: 0xfcc2f483,
    freight: 0x3d6aaa9b,
    freightcar: 0xafd22a6,
    freightcar2: 0xbdec3d99,
    freightcont1: 0x36dcff98,
    freightcont2: 0xe512e79,
    freightgrain: 0x264d9262,
    freighttrailer: 0xd1abb666,
    frogger: 0x2c634fbd,
    frogger2: 0x742e9ac0,
    fugitive: 0x71cb2ffb,
    furia: 0x3944d5a0,
    furoregt: 0xbf1691e0,
    fusilade: 0x1dc0ba53,
    futo: 0x7836ce2f,
    futo2: 0xa6297cc8,
    gargoyle: 0x2c2c2324,
    gauntlet: 0x94b395c5,
    gauntlet2: 0x14d22159,
    gauntlet3: 0x2b0c4dcd,
    gauntlet4: 0x734c5e50,
    gauntlet5: 0x817afaad,
    gb200: 0x71cbea98,
    gburrito: 0x97fa4f36,
    gburrito2: 0x11aa0e14,
    glendale: 0x47a6bc1,
    glendale2: 0xc98bbad6,
    gp1: 0x4992196c,
    graintrailer: 0x3cc7f596,
    granger: 0x9628879c,
    granger2: 0xf06c29c7,
    greenwood: 0x26ed430,
    gresley: 0xa3fc0f4d,
    growler: 0x4dc079d7,
    gt500: 0x8408f33a,
    guardian: 0x825a9f4c,
    habanero: 0x34b7390f,
    hakuchou: 0x4b6c568a,
    hakuchou2: 0xf0c2a91f,
    halftrack: 0xfe141da6,
    handler: 0x1a7fcefa,
    hauler: 0x5a82f9ae,
    hauler2: 0x171c92c4,
    havok: 0x89ba59f5,
    hellion: 0xea6a047f,
    hermes: 0xe83c17,
    hexer: 0x11f76c14,
    hotknife: 0x239e390,
    hotring: 0x42836be5,
    howard: 0xc3f25753,
    hunter: 0xfd707ede,
    huntley: 0x1d06d681,
    hustler: 0x23ca25f2,
    hydra: 0x39d6e83f,
    ignus: 0xa9ec907b,
    imorgon: 0xbc7c0a00,
    impaler: 0x83070b62,
    impaler2: 0x3c26bd0c,
    impaler3: 0x8d45df49,
    impaler4: 0x9804f4c7,
    imperator: 0x1a861243,
    imperator2: 0x619c1b82,
    imperator3: 0xd2f77e37,
    infernus: 0x18f25ac7,
    infernus2: 0xac33179c,
    ingot: 0xb3206692,
    innovation: 0xf683eaca,
    insurgent: 0x9114eada,
    insurgent2: 0x7b7e56f0,
    insurgent3: 0x8d4b7a8a,
    intruder: 0x34dd8aa1,
    issi2: 0xb9cb3b69,
    issi3: 0x378236e1,
    issi4: 0x256e92ba,
    issi5: 0x5ba0ff1e,
    issi6: 0x49e25ba1,
    issi7: 0x6e8da4f7,
    issi8: 0x5c6c00b4,
    italigtb: 0x85e8e76b,
    italigtb2: 0xe33a477b,
    italigto: 0xec3e3404,
    italirsx: 0xbb78956a,
    iwagen: 0x27816b7e,
    jackal: 0xdac67112,
    jb700: 0x3eab5555,
    jb7002: 0x177da45c,
    jester: 0xb2a716a3,
    jester2: 0xbe0e6126,
    jester3: 0xf330cb6a,
    jester4: 0xa1b3a871,
    jet: 0x3f119114,
    jetmax: 0x33581161,
    journey: 0xf8d48e7a,
    journey2: 0x9f04c481,
    jubilee: 0x1b8165d3,
    jugular: 0xf38c4245,
    kalahari: 0x5852838,
    kamacho: 0xf8c2e0e7,
    kanjo: 0x18619b7e,
    kanjosj: 0xfc2e479a,
    khamelion: 0x206d1b68,
    khanjali: 0xaa6f980a,
    komoda: 0xce44c4b9,
    kosatka: 0x4faf0d70,
    krieger: 0xd86a0247,
    kuruma: 0xae2bfe94,
    kuruma2: 0x187d938d,
    landstalker: 0x4ba4e8dc,
    landstalker2: 0xce0b9f22,
    lazer: 0xb39b0ae6,
    le7b: 0xb6846a55,
    lectro: 0x26321e67,
    lguard: 0x1bf8d381,
    limo2: 0xf92aec4d,
    lm87: 0xff5968cd,
    locust: 0xc7e55211,
    longfin: 0x6ef89ccc,
    lurcher: 0x7b47a6a7,
    luxor: 0x250b0c5e,
    luxor2: 0xb79f589e,
    lynx: 0x1cbdc10b,
    mamba: 0x9cfffc56,
    mammatus: 0x97e55d11,
    manana: 0x81634188,
    manana2: 0x665f785d,
    manchez: 0xa5325278,
    manchez2: 0x40c332a3,
    manchez3: 0x5285d628,
    marquis: 0xc1ce1183,
    marshall: 0x49863e9c,
    massacro: 0xf77ade32,
    massacro2: 0xda5819a3,
    maverick: 0x9d0450ca,
    menacer: 0x79dd18ae,
    mesa: 0x36848602,
    mesa2: 0xd36a4b44,
    mesa3: 0x84f42e51,
    metrotrain: 0x33c9e158,
    michelli: 0x3e5bd8d9,
    microlight: 0x96e24857,
    miljet: 0x9d80f93,
    minitank: 0xb53c6c52,
    minivan: 0xed7eada4,
    minivan2: 0xbcde91f0,
    mixer: 0xd138a6bb,
    mixer2: 0x1c534995,
    mogul: 0xd35698ef,
    molotok: 0x5d56f01b,
    monroe: 0xe62b361b,
    monster: 0xcd93a7db,
    monster3: 0x669eb40a,
    monster4: 0x32174afc,
    monster5: 0xd556917c,
    moonbeam: 0x1f52a43f,
    moonbeam2: 0x710a2b9b,
    mower: 0x6a4bd8f6,
    mule: 0x35ed670b,
    mule2: 0xc1632beb,
    mule3: 0x85a5b471,
    mule4: 0x73f4110e,
    mule5: 0x501ac93c,
    nebula: 0xcb642637,
    nemesis: 0xda288376,
    neo: 0x9f6ed5a2,
    neon: 0x91ca96ee,
    nero: 0x3da47243,
    nero2: 0x4131f378,
    nightblade: 0xa0438767,
    nightshade: 0x8c2bd0dc,
    nightshark: 0x19dd9ed1,
    nimbus: 0xb2cf7250,
    ninef: 0x3d8fa25c,
    ninef2: 0xa8e38b01,
    nokota: 0x3dc92356,
    novak: 0x92f5024e,
    omnis: 0xd1ad4937,
    omnisegt: 0xe1e2e6d7,
    openwheel1: 0x58f77553,
    openwheel2: 0x4669d038,
    oppressor: 0x34b82784,
    oppressor2: 0x7b54a9d3,
    oracle: 0x506434f6,
    oracle2: 0xe18195b2,
    osiris: 0x767164d6,
    outlaw: 0x185e2ff3,
    packer: 0x21eee87d,
    panthere: 0x7d326f04,
    panto: 0xe644e480,
    paradise: 0x58b3979c,
    paragon: 0xe550775b,
    paragon2: 0x546d8eee,
    pariah: 0x33b98fe2,
    patriot: 0xcfcfeb3b,
    patriot2: 0xe6e967f8,
    patriot3: 0xd80f4a44,
    patrolboat: 0xef813606,
    pbus: 0x885f3671,
    pbus2: 0x149bd32a,
    pcj: 0xc9ceaf06,
    penetrator: 0x9734f3ea,
    penumbra: 0xe9805550,
    penumbra2: 0xda5ec7da,
    peyote: 0x6d19ccbc,
    peyote2: 0x9472cd24,
    peyote3: 0x4201a843,
    pfister811: 0x92ef6e04,
    phantom: 0x809aa4cb,
    phantom2: 0x9dae1398,
    phantom3: 0xa90ed5c,
    phoenix: 0x831a21d5,
    picador: 0x59e0fbf3,
    pigalle: 0x404b6381,
    police: 0x79fbb0c5,
    police2: 0x9f05f101,
    police3: 0x71fa16ea,
    police4: 0x8a63c7b9,
    policeb: 0xfdefaec3,
    policeold1: 0xa46462f7,
    policeold2: 0x95f4c618,
    policet: 0x1b38e955,
    polmav: 0x1517d4d9,
    pony: 0xf8de29a8,
    pony2: 0x38408341,
    postlude: 0xee6f8f79,
    pounder: 0x7de35e7d,
    pounder2: 0x6290f15b,
    powersurge: 0xad5e30d7,
    prairie: 0xa988d3a2,
    pranger: 0x2c33b46e,
    predator: 0xe2e7d4ab,
    premier: 0x8fb66f9b,
    previon: 0x546da331,
    primo: 0xbb6b404f,
    primo2: 0x86618eda,
    proptrailer: 0x153e1b0a,
    prototipo: 0x7e8f677f,
    pyro: 0xad6065c0,
    r300: 0x402586f8,
    radi: 0x9d96b45b,
    raiden: 0xa4d99b7d,
    raketrailer: 0x174cb172,
    rallytruck: 0x829a3c44,
    rancherxl: 0x6210cbb0,
    rancherxl2: 0x7341576b,
    rapidgt: 0x8cb29a14,
    rapidgt2: 0x679450af,
    rapidgt3: 0x7a2ef5e4,
    raptor: 0xd7c56d39,
    ratbike: 0x6facdf31,
    ratloader: 0xd83c13ce,
    ratloader2: 0xdce1d9f7,
    rcbandito: 0xeef345ec,
    reaper: 0xdf381e5,
    rebel: 0xb802dd46,
    rebel2: 0x8612b64b,
    rebla: 0x4f48fc4,
    reever: 0x76d7c404,
    regina: 0xff22d208,
    remus: 0x5216ad5e,
    rentalbus: 0xbe819c63,
    retinue: 0x6dbd6c0a,
    retinue2: 0x79178f0a,
    revolter: 0xe78cc3d9,
    rhapsody: 0x322cf98f,
    rhinehart: 0x91673d0e,
    rhino: 0x2ea68690,
    riata: 0xa4a4e453,
    riot: 0xb822a1aa,
    riot2: 0x9b16a3b4,
    ripley: 0xcd935ef9,
    rocoto: 0x7f5c91f1,
    rogue: 0xc5dd6967,
    romero: 0x2560b2fc,
    rrocket: 0x36a167e0,
    rt3000: 0xe505cf99,
    rubble: 0x9a5b1dcc,
    ruffian: 0xcabd11e8,
    ruiner: 0xf26ceff9,
    ruiner2: 0x381e10bd,
    ruiner3: 0x2e5afd37,
    ruiner4: 0x65bdebfc,
    rumpo: 0x4543b74d,
    rumpo2: 0x961afef7,
    rumpo3: 0x57f682af,
    ruston: 0x2ae524a8,
    s80: 0xeca6b6a3,
    sabregt: 0x9b909c94,
    sabregt2: 0xd4ea603,
    sadler: 0xdc434e51,
    sadler2: 0x2bc345d1,
    sanchez: 0x2ef89e46,
    sanchez2: 0xa960b13e,
    sanctus: 0x58e316c7,
    sandking: 0xb9210fd0,
    sandking2: 0x3af8c345,
    savage: 0xfb133a17,
    savestra: 0x35ded0dd,
    sc1: 0x5097f589,
    scarab: 0xbba2a2f7,
    scarab2: 0x5beb3ce0,
    scarab3: 0xdd71bfeb,
    schafter2: 0xb52b5113,
    schafter3: 0xa774b5a6,
    schafter4: 0x58cf185c,
    schafter5: 0xcb0e7cd9,
    schafter6: 0x72934be4,
    schlagen: 0xe1c03ab0,
    schwarzer: 0xd37b7976,
    scorcher: 0xf4e1aa15,
    scramjet: 0xd9f0503d,
    scrap: 0x9a9fd3df,
    seabreeze: 0xe8983f9f,
    seashark: 0xc2974024,
    seashark2: 0xdb4388e4,
    seashark3: 0xed762d49,
    seasparrow: 0xd4ae63d9,
    seasparrow2: 0x494752f7,
    seasparrow3: 0x5f017e6b,
    seminole: 0x48ceced3,
    seminole2: 0x94114926,
    sentinel: 0x50732c82,
    sentinel2: 0x3412ae2d,
    sentinel3: 0x41d149aa,
    sentinel4: 0xaf1fa439,
    serrano: 0x4fb1a214,
    seven70: 0x97398a4b,
    shamal: 0xb79c1bf5,
    sheava: 0x30d3f6d8,
    sheriff: 0x9baa707c,
    sheriff2: 0x72935408,
    shinobi: 0x50a6fb9c,
    shotaro: 0xe7d2a16e,
    skylift: 0x3e48bf23,
    slamtruck: 0xc1a8a914,
    slamvan: 0x2b7f9de3,
    slamvan2: 0x31adbbfc,
    slamvan3: 0x42bc5e19,
    slamvan4: 0x8526e2f5,
    slamvan5: 0x163f8520,
    slamvan6: 0x67d52852,
    sm722: 0x2e3967b0,
    sovereign: 0x2c509634,
    specter: 0x706e2b40,
    specter2: 0x400f5147,
    speeder: 0xdc60d2b,
    speeder2: 0x1a144f2a,
    speedo: 0xcfb3870c,
    speedo2: 0x2b6dc64a,
    speedo4: 0xd17099d,
    squaddie: 0xf9e67c05,
    squalo: 0x17df5ec2,
    stafford: 0x1324e960,
    stalion: 0x72a4c31e,
    stalion2: 0xe80f67ee,
    stanier: 0xa7ede74d,
    starling: 0x9a9eb7de,
    stinger: 0x5c23af9b,
    stingergt: 0x82e499fa,
    stockade: 0x6827cf72,
    stockade3: 0xf337ab36,
    stratum: 0x66b4fc45,
    streiter: 0x67d2b389,
    stretch: 0x8b13f083,
    strikeforce: 0x64de07a1,
    stromberg: 0x34dba661,
    stryder: 0x11f58a5a,
    stunt: 0x81794c70,
    submersible: 0x2dff622f,
    submersible2: 0xc07107ee,
    sugoi: 0x3adb9758,
    sultan: 0x39da2754,
    sultan2: 0x3404691c,
    sultan3: 0xeea75e63,
    sultanrs: 0xee6024bc,
    suntrap: 0xef2295c9,
    superd: 0x42f2ed16,
    supervolito: 0x2a54c47d,
    supervolito2: 0x9c5e5644,
    surano: 0x16e478c1,
    surfer: 0x29b0da97,
    surfer2: 0xb1d80e06,
    surfer3: 0xc247aee5,
    surge: 0x8f0e3594,
    swift: 0xebc24df2,
    swift2: 0x4019cb4c,
    swinger: 0x1dd4c0ff,
    t20: 0x6322b39a,
    taco: 0x744ca80d,
    tahoma: 0xe478b977,
    tailgater: 0xc3ddfdce,
    tailgater2: 0xb5d306a4,
    taipan: 0xbc5dc07e,
    tampa: 0x39f9c898,
    tampa2: 0xc0240885,
    tampa3: 0xb7d9f7f1,
    tanker: 0xd46f4737,
    tanker2: 0x74998082,
    tankercar: 0x22eddc30,
    taxi: 0xc703db5f,
    technical: 0x83051506,
    technical2: 0x4662bcbb,
    technical3: 0x50d4d19f,
    tempesta: 0x1044926f,
    tenf: 0xcab6e261,
    tenf2: 0x10635a0e,
    terbyte: 0x897afc65,
    tezeract: 0x3d7c6410,
    thrax: 0x3e3d1f59,
    thrust: 0x6d6f8f43,
    thruster: 0x58cdaf30,
    tigon: 0xaf0b8d48,
    tiptruck: 0x2e19879,
    tiptruck2: 0xc7824e5e,
    titan: 0x761e2ad3,
    toreador: 0x56c8a5ef,
    torero: 0x59a9e570,
    torero2: 0xf62446ba,
    tornado: 0x1bb290bc,
    tornado2: 0x5b42a5c4,
    tornado3: 0x690a4153,
    tornado4: 0x86cf7cdd,
    tornado5: 0x94da98ef,
    tornado6: 0xa31cb573,
    toro: 0x3fd5aa2f,
    toro2: 0x362cac6d,
    toros: 0xba5334ac,
    tourbus: 0x73b1c3cb,
    towtruck: 0xb12314e0,
    towtruck2: 0xe5a2d6c6,
    tr2: 0x7be032c6,
    tr3: 0x6a59902d,
    tr4: 0x7cab34d0,
    tractor: 0x61d6ba8c,
    tractor2: 0x843b73de,
    tractor3: 0x562a97bd,
    trailerlarge: 0x5993f939,
    trailerlogs: 0x782a236d,
    trailers: 0xcbb2be0e,
    trailers2: 0xa1da3c91,
    trailers3: 0x8548036d,
    trailers4: 0xbe66f5aa,
    trailersmall: 0x2a72beab,
    trailersmall2: 0x8fd54ebb,
    trash: 0x72435a19,
    trash2: 0xb527915c,
    trflat: 0xaf62f6b2,
    tribike: 0x4339cd69,
    tribike2: 0xb67597ec,
    tribike3: 0xe823fb48,
    trophytruck: 0x612f4b6,
    trophytruck2: 0xd876dbe2,
    tropic: 0x1149422f,
    tropic2: 0x56590fe9,
    tropos: 0x707e63a4,
    tug: 0x82cac433,
    tula: 0x3e2e4f8a,
    tulip: 0x56d42971,
    tulip2: 0x1004eda4,
    turismo2: 0xc575df11,
    turismor: 0x185484e1,
    tvtrailer: 0x967620be,
    tyrant: 0xe99011c2,
    tyrus: 0x7b406efb,
    utillitruck: 0x1ed0a534,
    utillitruck2: 0x34e6bf6b,
    utillitruck3: 0x7f2153df,
    vacca: 0x142e0dc3,
    vader: 0xf79a00f7,
    vagner: 0x7397224c,
    vagrant: 0x2c1fea99,
    valkyrie: 0xa09e15fd,
    valkyrie2: 0x5bfa5c4b,
    vamos: 0xfd128dfd,
    vectre: 0xa42fc3a5,
    velum: 0x9c429b6a,
    velum2: 0x403820e8,
    verlierer2: 0x41b77fa4,
    verus: 0x11cbc051,
    vestra: 0x4ff77e37,
    vetir: 0x780ffbd2,
    veto: 0xcce5c8fa,
    veto2: 0xa703e4a9,
    vigero: 0xcec6b9b7,
    vigero2: 0x973141fc,
    vigilante: 0xb5ef4c33,
    vindicator: 0xaf599f01,
    virgo: 0xe2504942,
    virgo2: 0xca62927a,
    virgo3: 0xfdffb0,
    virtue: 0x27e34161,
    viseris: 0xe8a8ba94,
    visione: 0xc4810400,
    volatol: 0x1aad0ded,
    volatus: 0x920016f1,
    voltic: 0x9f4b77be,
    voltic2: 0x3af76f4a,
    voodoo: 0x779b4f2d,
    voodoo2: 0x1f3766e3,
    vortex: 0xdba9dbfc,
    vstr: 0x56cdee7d,
    warrener: 0x51d83328,
    warrener2: 0x2290c50a,
    washington: 0x69f06b57,
    wastelander: 0x8e08ec82,
    weevil: 0x61fe4d6a,
    weevil2: 0xc4bb1908,
    windsor: 0x5e4327c8,
    windsor2: 0x8cf5cae1,
    winky: 0xf376f1e6,
    wolfsbane: 0xdb20a373,
    xa21: 0x36b4a8a9,
    xls: 0x47bbcf2e,
    xls2: 0xe6401328,
    yosemite: 0x6f946279,
    yosemite2: 0x64f49967,
    yosemite3: 0x409d787,
    youga: 0x3e5f6b8,
    youga2: 0x3d29cd2b,
    youga3: 0x6b73a9be,
    youga4: 0x589a840c,
    z190: 0x3201dd49,
    zeno: 0x2714aa93,
    zentorno: 0xac5df515,
    zhaba: 0x4c8dba51,
    zion: 0xbd1b39c3,
    zion2: 0xb8e2ae18,
    zion3: 0x6f039a67,
    zombiea: 0xc3d7c72b,
    zombieb: 0xde05fb87,
    zorrusso: 0xd757d97d,
    zr350: 0x91373058,
    zr380: 0x20314b42,
    zr3802: 0xbe11efc6,
    zr3803: 0xa7dcc35c,
    ztype: 0x2d3bd401,
    // Do not manually add vehicles, use the `addVehicle` function.
};

/**
 * Add a vehicle by its name to the vehicle hash list
 *
 * @export
 * @param {string} name
 */
export function addVehicle(name: string) {
    vehicleHashes[name] = alt.hash(name);
}

/**
 * Get vehicle name from hash
 *
 * @export
 * @param {number} hash
 * @return {(string | undefined)}
 */
export function getNameFromHash(hash: number): string | undefined {
    for (let key of Object.keys(vehicleHashes)) {
        if (vehicleHashes[key] != hash) {
            continue;
        }

        return vehicleHashes[key];
    }

    return undefined;
}

/**
 * Get vehicles in the list
 *
 * @export
 * @return {string[]}
 */
export function getVehicles(): string[] {
    return Object.keys(vehicleHashes);
}
