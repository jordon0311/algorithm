import getRandomValue from "./getRandomValue"

function getRandomStringArray(length) {
    const stringList = [
        `bothers`, `chokers`, `chooser`, `chromes`, `coheirs`, `coheres`, `dehorns`, `earshot`, `echoers`,
        `exhorts`, `gheraos`, `gophers`, `hectors`, `heriots`, `heroics`, `heroism`, `hoarsen`, `hoarser`,
        `hoaxers`, `hoister`, `holders`, `hollers`, `holster`, `hombres`, `honkers`, `hoofers`, `hookers`,
        `hooters`, `hoovers`, `hoppers`, `hornets`, `horsier`, `hosiers`, `hosiery`, `hostler`, `howlers`,
        `inshore`, `joshers`, `koshers`, `moreish`, `mothers`, `ochreas`, `onshore`, `oraches`, `oxherds`,
        `phoresy`, `porches`, `pothers`, `preshow`, `rehouse`, `reshoot`, `reshown`, `reshows`, `rheboks`,
        `rhetors`, `roaches`, `rochets`, `rosehip`, `rotches`, `scherzo`, `senhora`, `shocker`, `shooter`,
        `shopper`, `shorted`, `shorten`, `shorter`, `shouter`, `showers`, `showery`, `showier`, `smother`,
        `soother`, `strophe`, `thermos`, `thrones`, `torches`, `troches`, `unhorse`, `abhors`, `adores`,
        `afresh`, `arches`, `arkose`, `arouse`, `ashier`, `ashore`, `basher`, `berths`, `bevors`, `boheas`,
        `boners`, `borers`, `borsch`, `borsht`, `boshes`, `bosker`, `bother`, `bourse`, `bowers`, `bowser`,
        `boxers`, `bromes`, `broses`, `broths`, `browse`, `censor`, `ceorls`, `chares`, `chaser`, `cheers`,
        `cherts`, `chiros`, `choirs`, `choker`, `chokes`, `choler`, `choose`, `chords`, `chorea`, `chores`,
        `chorus`, `chosen`, `choses`, `chrome`, `closer`, `coarse`, `coders`, `coheir`, `cohere`, `comers`,
        `cooers`, `copers`, `corers`, `corpse`, `corset`, `corves`, `course`, `covers`, `cowers`, `credos`,
        `cresol`, `crones`, `crores`, `dasher`, `decors`, `dehorn`, `dehors`, `desorb`, `dholes`, `dopers`,
        `dories`, `dorser`, `dosser`, `doters`, `douser`, `dowers`, `dowser`, `dozers`, `drones`, `droves`,
        `drowse`, `earths`, `echoer`, `echoes`, `ephods`, `ephors`, `epochs`, `ergots`, `erodes`, `errors`,
        `eschar`, `escort`, `escrow`, `ethers`, `ethnos`, `exhort`, `fetors`, `fisher`, `foehns`, `forces`,
        `forest`, `forges`, `fortes`, `foster`, `foyers`, `freons`, `fresco`, `froths`, `gherao`, `gofers`,
        `gomers`, `goners`, `gopher`, `gorges`, `gorses`, `gropes`, `grouse`, `groves`, `gusher`, `halers`,
        `haloes`, `harems`, `haters`, `havers`, `hawser`, `hazers`, `hearse`, `hearts`, `hector`, `hellos`,
        `helots`, `henrys`, `hereof`, `hereon`, `heresy`, `hereto`, `heriot`, `heroes`, `heroic`, `heroin`,
        `herons`, `herpes`, `hetero`, `hewers`, `hexose`, `hiders`, `hikers`, `hirers`, `hisser`, `hoards`,
        `hoarse`, `hoaxer`, `hoaxes`, `hoboes`, `hokier`, `holder`, `holier`, `holies`, `holler`, `hombre`,
        `homers`, `homeys`, `homier`, `homies`, `honest`, `honeys`, `honker`, `honors`, `hooeys`,
        `hoofer`, `hooker`, `hooter`, `hoover`, `hooves`, `hopers`, `hopper`, `horded`, `hordes`, `horned`,
        `hornet`, `horsed`, `horses`, `horsey`, `horsts`, `hosier`, `hosted`, `hostel`, `hotels`, `hotter`,
        `housed`, `housel`, `houses`, `hovels`, `hovers`, `howler`, `humors`, `husker`, `isohel`, `isomer`,
        `jokers`, `joseph`, `joshed`, `josher`, `joshes`, `kosher`, `lasher`, `lessor`, `loners`, `looser`,
        `lories`, `losers`, `lovers`, `lowers`, `lusher`, `masher`, `metros`, `mohurs`, `morels`, `morose`,
        `morphs`, `morsel`, `moshed`, `moshes`, `mother`, `mouser`, `movers`, `mowers`, `musher`,
        `norths`, `noshed`, `noshes`, `nosier`, `oaters`, `obeahs`, `ochers`, `ochrea`, `ochres`, `ocreas`,
        `offers`, `oglers`, `ogress`, `oilers`, `ombres`, `onrush`, `operas`, `orache`, `orates`, `orchis`,
        `orders`, `orgies`, `oriels`, `orisha`, `oryxes`, `osiers`, `osprey`, `ostler`, `others`, `otters`,
        `ouches`, `ouster`, `outers`, `owners`, `oxherd`, `oyster`, `perish`, `person`, `pharos`, `phaser`,
        `phones`, `phrase`, `poiser`, `pokers`, `posers`, `poseur`, `posher`, `poster`, `pother`, `powers`,
        `preops`, `presto`, `probes`, `proems`, `proles`, `prosed`, `proses`, `proves`, `pusher`, `ramose`,
        `raphes`, `rasher`, `rashes`, `reason`, `recons`, `rectos`, `redoes`, `redons`, `reecho`, `rehabs`,
        `rehash`, `relish`, `reoils`, `reorgs`, `repose`, `repots`, `rerose`, `reship`, `reshod`, `reshot`,
        `reshow`, `resold`, `resole`, `resorb`, `resort`, `retros`, `rewash`, `rhebok`, `rhesus`, `rhetor`,
        `rhinos`, `rhombs`, `rhymes`, `ribose`, `riches`, `robles`, `rochet`, `rodeos`, `rogers`, `rogues`,
        `rondes`, `ropers`, `roscoe`, `rosery`, `rosier`, `roster`, `rotche`, `rouges`, `roughs`, `roused`,
        `rouser`, `rouses`, `routes`, `rovers`, `rowels`, `rowers`, `rugose`, `rushed`, `rusher`, `rushes`,
        `scorch`, `scored`, `scorer`, `scores`, `scoter`, `search`, `sector`, `senior`, `senora`, `sensor`,
        `seraph`, `sermon`, `seroma`, `serosa`, `serous`, `servos`, `shader`, `shaker`, `shaper`, `shared`,
        `sharer`, `shares`, `shaver`, `shears`, `sheers`, `sherds`, `sherry`, `shiner`, `shires`, `shiver`,
        `shmear`, `shmeer`, `shofar`, `shooed`, `shoran`, `shored`, `shores`, `shorts`, `shorty`, `shoved`,
        `shovel`, `shoves`, `showed`, `shower`, `shreds`, `shrewd`, `shrews`, `shriek`, `shrike`, `shrine`,
        `shrive`, `shroff`, `shroom`, `shroud`, `shrove`, `sigher`, `slower`, `smoker`, `snored`, `snorer`,
        `snores`, `soaker`, `soared`, `sobers`, `soccer`, `softer`, `soiree`, `solder`, `solera`, `solver`,
        `somber`, `sonder`, `sooner`, `soothe`, `sorbet`, `sorely`, `sorest`, `sorrel`, `sorted`, `sorter`,
        `sortie`, `source`, `soured`, `sourer`, `sowers`, `sphere`, `spores`, `stereo`, `sterol`, `stoker`,
        `stoner`, `stored`, `stores`, `strobe`, `strode`, `stroke`, `strove`, `sypher`, `tenors`, `tensor`,
        `theirs`, `theory`, `thorns`, `thorps`, `threes`, `thresh`, `throbs`, `throes`, `throne`, `throve`,
        `throws`, `toners`, `topers`, `tortes`, `towers`, `triose`, `troche`, `tropes`, `troths`, `troves`,
        `tsores`, `ushers`, `versos`, `vireos`, `vomers`, `voters`, `washer`, `wholes`, `whorls`, `wisher`,
        `wooers`, `worsen`, `zeroes`, `zeroth`, `zoster`, `abhor`, `aches`, `acres`, `adore`, `afore`, `afros`,
        `agers`, `aloes`, `areas`, `arise`, `arose`, `arson`, `ashen`, `ashes`, `asker`, `asper`, `aster`, `avers`,
        `bares`, `baser`, `bears`, `beers`, `bergs`, `berks`, `berms`, `berth`, `besom`, `besot`, `bevor`,
        `biers`, `biros`, `boars`, `bodes`, `bohea`, `bokeh`, `boles`, `boner`, `bones`, `boors`, `boras`,
        `bored`, `borer`, `bores`, `borne`, `bower`, `boxer`, `boxes`, `braes`, `brash`, `brews`, `broch`,
        `broke`, `brome`, `brose`, `broth`, `brows`, `brush`, `burse`, `byres`, `cares`, `ceorl`, `ceros`,
        `certs`, `chaos`, `chare`, `chars`, `chase`, `cheer`, `chefs`, `chemo`, `chert`, `chess`, `chest`,
        `chews`, `chiro`, `chocs`, `choir`, `choke`, `chops`, `chord`, `chore`, `chose`, `chows`, `close`,
        `coder`, `codes`, `coeds`, `cokes`, `comer`, `comes`, `cones`, `cooer`, `coper`, `copes`, `copse`,
        `cords`, `cored`, `corer`, `cores`, `corks`, `corms`, `corns`, `corps`, `cosec`, `cotes`, `cover`,
        `coves`, `cower`, `coxes`, `coyer`, `crash`, `credo`, `creds`, `cress`, `crest`, `crews`, `cries`,
        `crocs`, `crone`, `crops`, `crore`, `cross`, `crows`, `cruse`, `crush`, `cures`, `curse`, `dares`,
        `dears`, `deash`, `decor`, `demos`, `dhole`, `dhows`, `doers`, `doeth`, `doges`, `doles`, `domes`,
        `doors`, `doper`, `dopes`, `dorks`, `dorms`, `dorsa`, `dosed`, `doses`, `doter`, `dotes`, `douse`,
        `doves`, `dower`, `dowse`, `dozer`, `dozes`, `drees`, `dregs`, `dress`, `dries`, `drone`, `drops`,
        `dross`, `drove`, `druse`, `dyers`, `earls`, `earns`, `earth`, `easer`, `eidos`, `emirs`, `enols`,
        `eosin`, `ephod`, `ephor`, `epoch`, `erase`, `ergot`, `ernes`, `erode`, `error`, `ester`,
        `estop`, `ether`, `ethos`, `euros`, `ewers`, `exons`, `expos`, `fares`, `faros`, `fears`, `ferns`, `fetor`,
        `fires`, `flesh`, `floes`, `foehn`, `fohns`, `forbs`, `force`, `fords`, `forex`, `forge`, `forks`, `forms`,
        `forte`, `forth`, `forts`, `fosse`, `fours`, `foxes`, `foyer`, `frees`, `freon`, `fresh`, `frets`, `fries`,
        `froes`, `frogs`, `frons`, `frosh`, `frost`, `froth`, `froze`, `gears`, `germs`, `gesso`, `ghost`, `girsh`,
        `goers`, `gofer`, `gomer`, `goner`, `goose`, `gored`, `gores`, `gorge`, `gorse`, `gorsy`, `goths`,
        `greys`, `grogs`, `groks`, `grope`, `gross`, `grosz`, `grots`, `grove`, `grows`, `gyres`, `gyros`,
        `hades`, `hairs`, `hajes`, `hakes`, `haler`, `hales`, `halos`, `hared`, `hares`, `harks`, `harms`,
        `harps`, `harsh`, `harts`, `haste`, `hater`, `hates`, `haver`, `haves`, `hawse`, `hazer`, `hazes`,
        `heads`, `heals`, `heaps`, `heard`, `hears`, `heart`, `heats`, `heeds`, `heels`, `hefts`, `heirs`, `heist`,
        `hello`, `helms`, `helot`, `helps`, `hemes`, `hemps`, `henry`, `herbs`, `herby`, `herds`, `herma`,
        `herms`, `heron`, `hertz`, `hewer`, `hexes`, `hider`, `hides`, `hiker`, `hikes`, `hired`, `hirer`,
        `hires`, `hives`, `hoard`, `hoary`, `hobos`, `hocks`, `hocus`, `hoers`, `hoggs`, `hoist`, `hoked`,
        `hokes`, `hokey`, `holds`, `holed`, `holes`, `holey`, `holms`, `holts`, `homed`, `homer`, `homes`,
        `homey`, `homie`, `homos`, `honed`, `hones`, `honey`, `honks`, `honor`, `hoods`, `hooey`,
        `hoofs`, `hooks`, `hoops`, `hoots`, `hoped`, `hoper`, `hopes`, `horal`, `horas`, `horde`, `horns`,
        `horny`, `horse`, `horst`, `horsy`, `hosed`, `hosen`, `hoses`, `hosts`, `hotel`, `hours`, `house`,
        `hovel`, `hover`, `howls`, `huger`, `humor`, `hurls`, `hurts`, `hydro`, `hyper`, `hypes`, `hypos`,
        `hyson`, `ichor`, `irons`, `jeers`, `jerks`, `joeys`, `johns`, `joker`, `jokes`, `jones`, `kenos`, `kerfs`,
        `kerns`, `khets`, `kiers`, `kohls`, `koras`, `krone`, `laser`, `leash`, `leers`, `lenos`, `lobes`, `lochs`,
        `lodes`, `loess`, `loges`, `loner`, `loose`, `lopes`, `lords`, `loris`, `losel`, `loser`, `loses`, `louse`,
        `lover`, `loves`, `lower`, `lures`, `lyres`, `mares`, `marsh`, `maser`, `mechs`, `memos`, `meows`,
        `merch`, `meres`, `meson`, `metro`, `mires`, `miser`, `modes`, `mohur`, `moles`, `moors`,
        `moose`, `mopes`, `morae`, `morel`, `mores`, `morns`, `morph`, `mosey`, `motes`, `moths`,
        `moues`, `mouse`, `mover`, `moves`, `mower`, `nares`, `nears`, `nerds`, `nodes`, `noels`, `noirs`,
        `noise`, `noose`, `norms`, `north`, `nosed`, `noses`, `nosey`, `notes`, `nurse`, `oared`, `oases`,
        `oater`, `oaths`, `obeah`, `obese`, `obeys`, `oboes`, `ocher`, `ochre`, `ocrea`, `odder`, `odors`,
        `offer`, `ogees`, `ogler`, `ogles`, `ogres`, `ohias`, `oiler`, `okras`, `older`, `oleos`, `ombre`,
        `omens`, `onset`, `oohed`, `oozes`, `opahs`, `opens`, `opera`, `orals`, `orate`, `orbed`, `orcas`,
        `order`, `ordos`, `oriel`, `ornis`, `orris`, `ortho`, `osier`, `other`, `otter`, `ousel`, `outer`, `ovens`,
        `overs`, `overt`, `owner`, `oxers`, `pares`, `parse`, `paseo`, `pears`, `peers`, `peons`, `pepos`,
        `perch`, `peris`, `perks`, `perms`, `perps`, `pervs`, `pesos`, `pesto`, `phase`, `phone`, `phots`,
        `piers`, `poems`, `poesy`, `poets`, `poise`, `poker`, `pokes`, `poles`, `pomes`, `pones`, `popes`,
        `porch`, `pored`, `pores`, `ports`, `posed`, `poser`, `poses`, `posse`, `pours`, `power`, `poxes`,
        `preop`, `preps`, `presa`, `prese`, `press`, `preys`, `pries`, `probe`, `probs`, `prods`, `proem`,
        `profs`, `progs`, `prole`, `proms`, `prone`, `props`, `prose`, `pross`, `prost`, `prosy`, `prove`,
        `prows`, `purse`, `pyres`, `pyros`, `qophs`, `races`, `rages`, `raise`, `rakes`, `rales`, `rapes`,
        `raphe`, `rates`, `rathe`, `raves`, `razes`, `reach`, `reads`, `reals`, `reams`, `reaps`, `rears`, `rebus`,
        `recon`, `recto`, `redes`, `redon`, `redox`, `reeds`, `reefs`, `reeks`, `reels`, `rehab`, `reins`,
        `rends`, `renos`, `rents`, `reoil`, `reorg`, `repos`, `repot`, `repro`, `resay`, `reses`, `reset`, `resew`,
        `resin`, `rests`, `retch`, `retro`, `reuse`, `rexes`, `rheas`, `rheum`, `rhino`, `rhomb`, `rhyme`,
        `rides`, `riels`, `riles`, `rimes`, `rinse`, `riots`, `risen`, `riser`, `rises`, `rishi`, `rites`, `rives`,
        `roach`, `roads`, `roams`, `roans`, `roars`, `roast`, `robed`, `robes`, `roble`, `rocks`, `rodeo`,
        `roger`, `rogue`, `roils`, `roles`, `rolls`, `romps`, `ronde`, `roods`, `roofs`, `rooks`, `rooms`,
        `roost`, `roots`, `roped`, `roper`, `ropes`, `ropey`, `roque`, `roses`, `rosin`, `rotes`, `rotos`,
        `rouge`, `rough`, `rouse`, `roust`, `route`, `routs`, `roved`, `rover`, `roves`, `rowed`, `rowel`,
        `rower`, `rubes`, `rules`, `runes`, `ruses`, `saber`, `sabre`, `safer`, `sager`, `saner`, `saree`, `sarge`,
        `sarod`, `saros`, `saver`, `savor`, `scare`, `schmo`, `scone`, `scope`, `score`, `scorn`, `scour`,
        `scree`, `screw`, `scrod`, `sears`, `secco`, `seers`, `segno`, `segos`, `senor`, `sepoy`, `seral`,
        `serer`, `serfs`, `serge`, `serif`, `serum`, `serve`, `servo`, `seton`, `sever`, `sewer`, `sexto`,
        `shade`, `shake`, `shako`, `shame`, `shape`, `shard`, `share`, `shark`, `sharp`, `shave`, `sheaf`,
        `shear`, `sheds`, `sheen`, `sheep`, `sheer`, `sheet`, `sheik`, `shelf`, `shell`, `sherd`, `shewn`,
        `shews`, `shied`, `shier`, `shies`, `shine`, `shire`, `shirk`, `shirr`, `shirt`, `shiur`, `shive`, `shoal`,
        `shoat`, `shock`, `shoed`, `shoes`, `shogi`, `shoji`, `shone`, `shook`, `shoos`, `shoot`, `shops`,
        `shore`, `shorn`, `short`, `shots`, `shout`, `shove`, `shown`, `shows`, `showy`, `shoyu`, `shred`,
        `shrew`, `shrub`, `shrug`, `shyer`, `sired`, `siren`, `sires`, `sixer`, `sizer`, `skier`, `skosh`, `slier`,
        `sloes`, `slope`, `slosh`, `sloth`, `slyer`, `smear`, `smoke`, `smote`, `snare`, `sneer`, `snore`,
        `snort`, `soars`, `soave`, `sober`, `solar`, `soled`, `solei`, `soles`, `solve`, `sonar`, `sooth`,
        `sophy`, `sopor`, `sorbs`, `sored`, `sorer`, `sores`, `sorgo`, `sorry`, `sorts`, `sough`, `sours`,
        `souse`, `south`, `sowed`, `sower`, `spare`, `spear`, `sperm`, `spier`, `spire`, `spoke`, `spoor`,
        `spore`, `sport`, `spree`, `sprog`, `sprue`, `stare`, `steer`, `steno`, `stern`, `stoke`, `stole`, `stone`,
        `stope`, `store`, `stork`, `storm`, `story`, `stove`, `strep`, `strew`, `strop`, `sudor`, `super`, `surah`,
        `surer`, `surge`, `swear`, `sword`, `swore`, `sworn`, `tares`, `taros`, `taser`, `tears`, `techs`,
        `telos`, `tenor`, `teres`, `terms`, `terns`, `terse`, `their`, `there`, `these`, `thorn`, `thorp`, `those`,
        `three`, `threw`, `throb`, `throe`, `throw`, `tiers`, `tires`, `tokes`, `toles`, `tomes`, `toner`, `tones`,
        `toper`, `topes`, `torch`, `torsi`, `torso`, `torte`, `torts`, `torus`, `totes`, `tours`, `tower`, `trash`,
        `trees`, `treks`, `tress`, `treys`, `tries`, `trios`, `trois`, `trope`, `troth`, `trots`, `trove`, `trues`,
        `tyros`, `urase`, `uredo`, `urges`, `users`, `usher`, `veers`, `verbs`, `verse`, `verso`, `verts`,
        `vireo`, `vires`, `visor`, `voles`, `vomer`, `voter`, `votes`, `wares`, `wears`, `weirs`, `welsh`,
        `where`, `whets`, `whirs`, `whole`, `whops`, `whorl`, `whose`, `whoso`, `wires`, `wiser`, `wooer`,
        `words`, `works`, `worms`, `worse`, `worst`, `worth`, `wrens`, `wrest`, `wrote`, `wroth`, `xerox`,
        `years`, `yeesh`, `yoghs`, `yokes`, `yours`, `zeros`, `zones`,
    ]
    const stringArray = Array(length).fill('').map(() => (
        getRandomValue(stringList)
    ))
    return stringArray
}

export default getRandomStringArray