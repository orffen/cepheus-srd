# Chapter 2: Skills

Characters in Cepheus Engine games engage in a variety of activities, using their various skills to accomplish the challenges that confront them. Skills and their usage are described in this chapter.

## Skill Checks

Skill checks use the core task resolution system for the Cepheus Engine to resolve actions. Whenever your character attempts any action with a chance of failure, roll 2D6, add any skill levels, the appropriate characteristic score modifier, and your difficulty DM. If the result equals or exceeds 8, the action succeeds. If the result is lower than 8, the action fails. The basics of the task resolution system can be found in the [Introduction chapter](../introduction.md), under [Die Rolls](../introduction.md#die-rolls).

### Task Description Format

Task descriptions can be formally written in a specific format, as follows.

> _Task Description:_ Required Skill, Characteristic, Time Increment, Difficulty.

**Task Description:** Describes the action of the task itself. In print, this is often italicized to help it stand out.

**Required Skill:** The skill required for the task. Skill levels are added as a positive DM to the check. Unskilled characters suffer a -3 DM if they do not have this skill.

**Characteristic:** The characteristic modifier that is added to the check.

**Time Increment:** The time range required to perform the task.

#### Informal Skill Check Descriptions

Skill checks are also informally written by Difficulty followed by Required Skill throughout this System Reference Document. For example, repairing damage on a starship in mid-combat might be a Very Difficult (–4) Engineering task. When listed in this manner, the Referee gets to choose an appropriate Characteristic to modify the skill check, as well as the time increment involved, if it is not already obvious from context.

### Untrained and Zero-Level Skills

Characters can perform some tasks without any training in a skill, using only raw talent (defined by their characteristic scores), but skilled characters tend to be better at such things. Unless the Referee says you cannot, you can always attempt tasks involving that skill even if you have no training in it.

If a character has no level in a skill, then he is untrained and will suffer a –3 Dice Modifier when trying to use that skill.

If a character has zero level in a skill (Skill 0), then he is competent in using that skill, but has little experience. He does not get any bonus from his skill ranks when using that skill but at least he avoids the penalty for being untrained.

### Going Faster or Slower

You can choose, before you roll, to move up or down one or two rows on the Time Frames table. Moving up (reducing the time increment) gives you a –1 DM for every row you move; moving down and increasing the time taken gives you a +1 DM for every row you move. Your Referee will help adjudicate any issues that might arise from a change in the time frame.

| Time Frame | Base Increment |
| --- | --- |
| 1D6 seconds | One second |
| 1D6 rounds | One personal combat round (6 seconds) |
| 1D6 minutes | One minute (60 seconds, or 10 personal combat rounds) |
| 1D6 kiloseconds | One kilosecond (~16.67 minutes, or one space combat turn) |
| 1D6 hours | One hour (60 minutes) |
| 1D6 days | One day (24 hours) |
| 1D6 weeks | One week (7 days) |
| 1D6 months | One common month (30-31 days) |
| 1D6 quarters | One quarter (3 common months) |

### Multiple Actions

A character can try to do two or more things at once, like firing a spacecraft's weapons while also flying, or disarming a bomb while hiding from guards. For every extra thing that the character is doing, he suffers a –2 DM to all skill checks.

### Local Law Level

Some tasks are impacted by a world's local Law Level, as presented in the Universal World Profile. For tasks that are impacted by the local laws, rules and regulations, the usual difficulty for tasks can be found in the Base Difficulty by Law Level table.

| Law Level | Difficulty |
| --- | --- |
| 0 | Routine (DM+2) |
| 1-3 | Average (DM+0) |
| 4-6 | Difficult (DM-2) |
| 7-9 | Very Difficult (DM-4) |
| 10+ | Formidable (DM-6) |

## Available Skills List

The following is a list of the available skills used in the core Cepheus Engine rules. Referees may add other skills as needed to better fit the universe they have created.

| Basic Skills | Weapon Skills | Transport Skills |
| --- | --- | --- |
| [Admin](#admin) | [Gun Combat (Cascade Skill)](#gun-combat-cascade-skill) | [Vehicle (Cascade Skill)](#vehicle-cascade-skill) |
| [Advocate](#advocate) | [Archery](#archery) | [Aircraft (Cascade Skill)](#aircraft-cascade-skill) |
| [Animals (Cascade Skill)](#animals-cascade-skill) | [Energy Pistol](#energy-pistol) | [Airship](../vds/introduction.md#airship) |
| [Farming](#farming) | [Energy Rifle](#energy-rifle) | [Grav Vehicle](#grav-vehicle) |
| [Riding](#riding) | [Shotgun](#shotgun) | [Rotor Aircraft](#rotor-aircraft) |
| [Survival](#survival) | [Slug Pistol](#slug-pistol) | [Winged Aircraft](#winged-aircraft) |
| [Veterinary Medicine](#veterinary-medicine) | [Slug Rifle](#slug-rifle) | [Mole](#mole) |
| [Athletics](#athletics) | [Gunnery (Cascade Skill)](#gunnery-cascade-skill) | [Tracked Vehicle](#tracked-vehicle) |
| [Battle Dress](#battle-dress) | [Bay Weapons](#bay-weapons) | [Watercraft (Cascade Skill)](#watercraft-cascade-skill) |
| [Bribery](#bribery) | [Heavy Weapons](#heavy-weapons) | [Motorboats](#motorboats) |
| [Broker](#broker) | [Screens](#screens) | [Ocean Ships](#ocean-ships) |
| [Carousing](#carousing) | [Spinal Mounts](#spinal-mounts) | [Sailing Ships](#sailing-ships) |
| [Comms](#comms) | [Turret Weapons](#turret-weapons) | [Submarine](#submarine) |
| [Computer](#computer) | [Melee Combat (Cascade Skill)](#melee-combat-cascade-skill) | [Wheeled Vehicle](#wheeled-vehicle) |
| [Demolitions](#demolitions) | [Bludgeoning Weapons](#bludgeoning-weapons) |
| [Electronics](#electronics) | [Natural Weapons](#natural-weapons) |
| [Engineering](#engineering) | [Piercing Weapons](#piercing-weapons) |
| [Gambling](#gambling) | [Slashing Weapons](#slashing-weapons) |
| [Gravitics](#gravitics) |
| [Jack-of-all-Trades (Jack o' Trades)](#jack-of-all-trades-jack-o-trades-or-jot) |
| [Leadership](#leadership) |
| [Linguistics](#linguistics) |
| [Liaison](#liaison) |
| [Mechanics](#mechanics) |
| [Medicine](#medicine) |
| [Navigation](#navigation) |
| [Piloting](#piloting) |
| [Recon](#recon) |
| [Sciences (Cascade Skill)](#sciences-cascade-skill) |
| [Life Sciences](#life-sciences) |
| [Physical Sciences](#physical-sciences) |
| [Social Sciences](#social-sciences) |
| [Space Sciences](#space-sciences) |
| [Steward](#steward) |
| [Streetwise](#streetwise) |
| [Tactics](#tactics) |
| [Zero-G](#zero-g) |

## Skill Descriptions

This section describes each skill found in the Cepheus Engine, including its common uses. You may be able to use skills for tasks other than those given here. The Referee sets the Difficulty and decides the results in all cases.

### Admin

The character has experience with bureaucratic agencies, and understands the requirements of dealing with and managing them. When attempting tasks like avoiding police harassment, ensuring the prompt issuance of licenses, approval of applications, avoidance of close inspection of papers, etc., a successful Admin skill check (with a Difficulty based on [Base Difficulty by Law Level table](#local-law-level)), will provide a positive outcome to the situation.

**Bureaucrats and Administrators:** Dealing with administrators and bureaucrats is always a time consuming and tedious chore, which somehow seems to play a common part in Cepheus Engine adventures. No special skills are needed to deal with bureaucrats, but characters with the Admin (or [Advocate](#advocate)) skill will be familiar with their ways and find the task much smoother and easier.

The offer of a bribe and a Bribery skill check may also be attempted in place of an ability or Admin or [Advocate](#advocate) skill check. See the [Bribery](#bribery) skill description for more information.

### Advocate

The character is familiar with the general laws and regulations that govern interstellar travel, commerce and relations. This skill does not impart knowledge of the myriad of laws on each individual world, nor does it allow the person to act as an attorney.

**Ship Inspections:** Typically, when a ship arrives at a new world, it will be inspected by the port authorities to check for compliance with all applicable laws and regulations. It is also not uncommon for patrol ships to stop and board merchant and other ships while in deep space. When such an inspection does occur, the character may make an Advocate check (with a Difficulty based on Base Difficulty by Law Level table) to be found in compliance and pass inspection. If there is anything illegal on board, the character suffers a -2 DM to the check.

### Aircraft (Cascade Skill)

The various specialties of this skill cover different types of flying vehicles. When this skill is received, the character must immediately select one of the following: [Airship](../vds/introduction.md#airship), [Grav Vehicle](#grav-vehicle), [Rotor Aircraft](#rotor-aircraft) or [Winged Aircraft](#winged-aircraft).

### Animals (Cascade Skill)

The various specialties of this skill cover different aspects of animal handling. When this skill is received, the character must immediately select one of the following: [Farming](#farming), [Riding](#riding), [Survival](#survival), or [Veterinary Medicine](#veterinary-medicine).

### Archery

The character is skilled at using bows and crossbows for hunting or in combat.

### Athletics

This skill covers physical fitness and training, similar to that of a trained athlete. This includes acts requiring physical coordination, such as climbing, juggling or throwing; acts of endurance, such as long-distance running or hiking; and acts of strength, such as weight-lifting or bodybuilding.

**Aliens with Wings:** For alien species with wings, this skill is also used to reflect their ability to fly.

### Battle Dress

This skill permits the character to operate advanced battle armor, a powered form of combat armor that enhances the wearer's capabilities in various ways. Ground-based military forces, and numerous mercenaries, are often trained in the basics of battle dress operation. This skill also covers the ability to operate vehicles designed as mechanical exoskeletons.

### Bay Weapons

The character is skilled at operating bay weapons on board a ship.

### Bludgeoning Weapons

The character is skilled at using bludgeoning weapons, such as clubs, staffs and really big wrenches, in personal combat.

### Bribery

The character has experience in bribing petty and not-so petty officials in order to circumvent regulations or ignore cumbersome laws. The amount of a bribe is often based on the level of offense, as outlined in the Bribery Checks By Offense table.

| Offense | DM | Minimum Bribe |
| --- | --- | --- |
| Petty Crime or Infraction | +2 | 1D6xCr10 |
| Misdemeanor, Minor Infraction | +0 | 1D6xCr50 |
| Serious Crime or Infraction | \-2 | 1D6xCr100 |
| Capital Crime or Infraction | \-4 | 1D6xCr500 |

If the bribe is less than the minimum bribe required, the attempt will automatically fail. Characters may offer more than the minimum bribe required and receive a +1 DM for each multiple of the bribe offered. If the first offer is refused, a character may make a second attempt at twice the previous value of the bribe. If both attempts are refused (failed), the Referee should have the character make a Social Standing check, with a Difficulty based on Base Difficulty by Law Level table. If this also fails, the character will be brought up on charges of attempted bribery.

For example, a character trying to bribe an official to ignore a minor smuggling infraction would have to offer a minimum bribe of Cr200. If the character offered Cr400 instead the character could gain a +1 DM on the check. If Cr600 were offered, the character could gain a +2 DM, etc.

### Broker

A broker is skilled in locating suppliers and buyers, and facilitating the purchase and resale of commercial goods, as per the [Trade and Commerce](../book2/trade-and-commerce.md) rules.

### Carousing

This skill reflects the interpersonal art of interacting and socializing with others. The character is skilled in the art of small talk and making others feel at ease in their presence in almost any social situation, such as a party, ball, inauguration, bar hopping, etc.

### Comms

The character is trained in the use, repair, and maintenance of communications and sensor devices. While anyone can press the button and make a communicator function, this skill is necessary to understand why the device does not work, or how to use the device for purposes other than open transmission. When using sensors, this skill allows the character to interpret the long-range data of a ship's sensors and scanners. Skilled characters can boost an incoming or outgoing signal, create or break a secure channel, detect signals and anomalies, hide or piggyback on another signal, jam local communications, locate and assess potential threats, and analyze complex sensor data.

### Computer

The character is skilled in the programming and operation of electronic and fiber optic computers, both ground and shipboard models. Computers can be found on any world with a TL of 8 or higher, becoming exponentially more common at higher technology levels.

A character without at least some computer training might find himself at disadvantage in the highly technical universe of science fiction. Anyone with Computer-0 or better can perform the following without a skill check: Log on to a Datanet, send and receive messages, search for non-classified information, and retrieve data and files. More skilled users can create or break data encryption; mine data effectively; create or break data and network security protocols; and perform other general programming tasks.

### Demolitions

This skill covers the use of demolition charges and other explosive devices, including assembling or disarming bombs.

### Electronics

The character is practiced in installing, using, maintaining, repairing and/or creating electronic devices and equipment. The character can practice a trade and make a decent living, earning a paycheck for every week of dedicated work. The character knows how to use the tools of the trade, how to perform routine tasks, how to supervise untrained helpers, and how to handle common problems.

**Disabling Devices:** The character is skilled at disarming alarm systems, picking electronic locks, disabling a malfunctioning robot, or similar tasks involving electronic devices.

### Energy Pistol

The character is skilled at using advanced pistol-style energy weapons like laser pistols and stunners.

### Energy Rifle

The character is skilled at using advanced energy weapons like laser rifles or plasma rifles.

### Engineering

The character is skilled in the operation and maintenance of starship maneuver drives, Jump drives, and power plants. The character can practice a trade and make a decent living, earning a paycheck for every week of dedicated work. The character knows how to use the tools of the trade, how to perform routine tasks, how to supervise untrained helpers, and how to handle common problems. Engineering is particularly important in diverting power to the Jump Drives for a successful transition into Jump space.

### Farming

The character can grow and harvest crops and raise animals. This also covers hydroponic farming and clone harvesting for food production, at sufficiently high tech levels.

### Gambling

The individual is well informed on games of chance, and wise in their play. He or she has an advantage over non-experts, and is generally capable of winning when engaged in such games. Gambling, however, should not be confused with general risk-taking.

**Non-Competitive Games:** These are games such as Slots, Roulette, Blackjack, Keno, etc. These games are played strictly against the house and the odds are pretty much constant, as are the payoff values. The character chooses a game by its odds of winning (high, average, low, small or remote) and places a bet. The Referee determines if the game is rigged. The character then rolls their Gambling score. On a success, the character receives the payoff amount based on the amount of their initial bet. House always wins on a natural 2.

| Odds of Winning | DM | Payoff | Maximum Bet |
| --- | --- | --- | --- |
| Rigged | \-8 | Varies | Varies |
| Remote | \-6 | 1:10 | Cr5,000 |
| Small | \-4 | 1:8 | Cr1,000 |
| Low | \-2 | 1:4 | Cr500 |
| Average | +0 | 1:2 | Cr100 |
| High | +2 | 2:3 | Cr50 |

**Competitive Games:** If playing against a group of other players, each member of the game will make their Gambling skill check with the highest roll taking the pot. A character may attempt to cheat during a game at any time by stating his or her intent to cheat and making an extra Gambling check. If any other player in the game makes a successful opposing Gambling check against the character's attempt at cheating they are caught red-handed. Otherwise the player has successfully cheated and takes the pot. If more than one person attempts to cheat during the same round of play, the person with the highest roll wins the pot.

### Grav Vehicle

This skill grants the ability to properly maneuver and perform basic, routine maintenance on air/rafts and other vehicles that use gravitic technology. Grav vehicles have theoretically perfect maneuverability and can hover, but skill checks may be necessary when performing high-speed aerobatics.

### Gravitics

The character is practiced in installing, maintaining, repairing and/or creating gravitic devices and equipment. Such items include air/raft lift modules, grav belts, grav sleds, grav tanks, etc. Gravitics skill deals with the technical details of such vehicles; Grav Vehicle skill is required to actually pilot or drive them. The character can practice a trade and make a decent living, earning a paycheck for every week of dedicated work. The character knows how to use the tools of the trade, how to perform routine tasks, how to supervise untrained helpers, and how to handle common problems.

### Gun Combat (Cascade Skill)

The various specialties of this skill cover different types of ranged personal weapons. When this skill is received, the character must immediately select one of the following: [Archery](#archery), [Energy Pistol](#energy-pistol), [Energy Rifle](#energy-rifle), [Shotgun](#shotgun), [Slug Pistol](#slug-pistol), or [Slug Rifle](#slug-rifle).

### Gunnery (Cascade Skill)

The various specialties of this skill cover different types of devastating weapons commonly used against vehicles, spaceships and ground installations. When this skill is received, the character must immediately select one of the following: [Bay Weapons](#bay-weapons), [Heavy Weapons](#heavy-weapons), [Screens](#screens), [Spinal Mounts](#spinal-mounts), or [Turret Weapons](#turret-weapons).

### Heavy Weapons

The Heavy Weapons skill covers man-portable and larger weapons that cause extreme property damage, such as rocket launchers, artillery and plasma weapons.

### Jack-of-All-Trades (Jack o' Trades or JoT)

The Jack of All Trades skill works differently to other skills. It reduces the unskilled penalty a character receives for not having the appropriate skill by one for every level of Jack of All Trades. Jack of All Trades cannot grant a skill bonus at higher levels.

### Leadership

The character possesses the ability to rally, inspire, organize and direct team efforts to ensure the best cooperation and productivity possible.

**Coordinating Effort:** Whenever a task requires one or more characters to combine their efforts (i.e. Teamwork; each makes a skill or ability check towards a common goal), the character gains a pool of points equal to the Effect of the skill check (minimum of 1), which can be distributed by the leader to individual team members as DMs (grant a +1 DM per point) on skill or ability checks made toward the common goal.

**Improving Initiative:** The Leadership skill can be used to increase another character's Initiative. The character with Leadership makes a Leadership check, and the target character's Initiative is increased by the Effect of the check. Making a Leadership skill check is a significant action.

### Linguistics

The character can read and write a different language for every level of Linguistics they possess. All characters can speak and read their native language without needing the Linguistics skill, and automated computer translator programs mean that the Linguistics skill are not always needed on other worlds. Having Linguistics-0 implies that the character has a smattering of simple phrases in many languages. In addition, Linguistics can be used to attempt to decipher the general meaning of a preserved specimen of language, such as an inscription or a recorded message.

### Liaison

The character is trained in the art of dealing with others, including knowledge of proper protocols, manners of address, codes of conduct and other information needed when dealing with a wide range of societal types. Such a character is quite useful when attempting to negotiate a particularly edgy deal, to convince the Duke's secretary to admit the party into the Duke's presence, help settle a dispute between two opposing groups, or other acts of negotiation and diplomacy.

**Influencing Others:** The character can change others' attitudes with a successful check. In negotiations, participants roll opposed Liaison checks to see who gains the advantage. Opposed checks also resolve cases when two diplomats are engaged in negotiations.

### Life Sciences

This skill represents theoretical and practical knowledge derived from the scientific study of living organisms. This covers a wide range of related fields, such as biochemistry, biology, botany, cybernetics, genetics, physiology and psionocology.

### Mechanics

The character is practiced in installing, using, maintaining, repairing and/or creating mechanical devices and equipment. The character can practice a trade and make a decent living, earning a paycheck for every week of dedicated work. The character knows how to use the tools of the trade, how to perform routine tasks, how to supervise untrained helpers, and how to handle common problems.

**Disabling Devices:** The character is skilled at disabling mechanical alarm systems, picking mechanical locks, or similar tasks involving mechanical devices.

### Medicine

The individual has training and skill in the medical arts and sciences, from diagnosis and triage to surgery and other corrective treatments. This skill represents a character's ability to provide emergency care, short term care, long-term care, and specialized treatment for diseases, poisons and debilitating injuries. When treating a patient of a race other than their own, the character suffers a -2 DM.

### Melee Combat (Cascade Skill)

The various specialties of this skill cover different types of personal melee combat weapons. When this skill is received, the character must immediately select one of the following: [Natural Weapons](#natural-weapons), [Bludgeoning Weapons](#bludgeoning-weapons), [Piercing Weapons](#piercing-weapons) or [Slashing Weapons](#slashing-weapons).

### Mole

This skill grants the ability to properly maneuver and perform basic, routine maintenance on vehicles that move through solid matter using drills or other earth-moving technologies, like plasma torches or cavitation.

### Motorboats

This skill grants the ability to properly maneuver and perform basic, routine maintenance on small motorized watercraft.

### Natural Weapons

The character is skilled at using their natural weapons in personal combat. Among humans, this includes brawling, martial arts and wrestling.

### Navigation

The character is trained in the science of normal and Jump space navigation. The Navigator on a starship plots the course and ensures that the astrogational information required by the pilot and other crewmembers is available when it is needed. This skill includes the ability to determine a ship's new location after a Jump ends, plotting a standard course through normal space, and plotting a Jump route through Jump space. A starship cannot make a Jump safely without a Jump route.

### Ocean Ships

This skill grants the ability to properly maneuver and perform basic, routine maintenance on large motorized sea-going ships.

### Physical Sciences

This skill represents theoretical and practical knowledge derived from the scientific study of the nature and properties of energy and non-living matter. This covers a wide range of related fields, such as chemistry, electronics, geology and physics.

### Piercing Weapons

The character is skilled at using piercing and thrusting weapons, such as spears and polearms, in personal combat.

### Piloting

The individual has training and experience in the operation of interplanetary and interstellar spacecraft. Piloting expertise is necessary to handle such craft, though a check is usually only made when circumstances become challenging, such as due to rough atmospheric conditions or hostile action.

### Recon

This skill represents the ability to scout out dangers and spot threats, unusual objects or out of place people. Characters skilled in Recon are adept at staying unseen and unheard.

### Riding

This skill grants the ability to properly maneuver and provide basic, routine care for horses and other living creatures that are trained to bear a rider.

### Rotor Aircraft

This skill grants the ability to properly maneuver and perform basic, routine maintenance on helicopters, hovercraft and other similar craft. Rotor aircraft can hover but may require skill checks to keep steady in the face of adverse environmental conditions.

### Sciences (Cascade Skill)

The various specialties of this skill cover different fields of scientific study. When this skill is received, the character must immediately select one of the following: [Life Sciences](#life-sciences), [Physical Sciences](#physical-sciences), [Social Sciences](#social-sciences), or [Space Sciences](#space-sciences).

### Sailing Ships

This skill grants the ability to properly maneuver and perform basic, routine maintenance on wind-driven watercraft.

### Screens

The character is skilled at activating and using a ship's energy screens like nuclear dampers or meson screens.

### Shotgun

The character is skilled at using shotguns.

### Slashing Weapons

The character is skilled at using cutting and slashing weapons, such as swords and axes, in personal combat.

### Slug Pistol

The character is skilled at using projectile-based pistols like the body pistol or snub pistol.

### Slug Rifle

The character is skilled at using projectile-based rifle weapons such as the autorifle or gauss rifle.

### Social Sciences

This skill represents theoretical and practical knowledge derived from the scientific study of sophont society and social relationships. This covers a wide range of related fields, such as archeology, economics, history, philosophy, psychology and sophontology.

### Space Sciences

This skill represents theoretical and practical knowledge derived from several scientific disciplines that study phenomena occurring in interplanetary and interstellar space, and the celestial bodies that exist within that space. This covers a wide range of related fields, such as astronomy, cosmology, planetology and xenology.

### Spinal Mounts

The character is skilled at operating bay or spinal mount weapons on board a ship. These weapons can be used against other ships or for planetary bombardment or attacks on stationary targets.

### Steward

The Steward skill allows the character to serve and care for nobles and high-class passengers. This includes knowledge of concierge duties, housekeeping services, meal preparation and presentation, personal grooming assistance and valet service, and proper social etiquette.

### Streetwise

A character with the Streetwise skill understands the urban environment and the power structures in society. A skilled character knows where to go for information, how to handle strangers without offending them, and who can handle activities bordering on the fringe of legality.

### Submarine

This skill grants the ability to properly maneuver and perform basic, routine maintenance on vehicles that travel underwater.

### Survival

The character is skilled in the art of survival in the wild, including hunting or trapping animals, avoiding exposure, locating sources of food and fresh water (if available), producing fires (where possible), finding shelter, avoiding dangerous flora and fauna, avoiding getting lost, and dealing with the dangers of hazardous climates (arctic, desert, etc.).

### Tactics

This skill covers tactical planning and decision making, from board games to squad level combat to fleet engagements.

### Tracked Vehicle

This skill grants the ability to properly maneuver and perform basic, routine maintenance on tanks and other vehicles that move on tracks.

### Turret Weapons

The character is skilled at operating turret-mounted weapons on board a ship.

### Vehicle (Cascade Skill)

The various specialties of this skill cover different types of planetary transportation. When this skill is received, the character must immediately select one of the following: [Aircraft](#aircraft-cascade-skill), [Mole](#mole), [Tracked Vehicle](#tracked-vehicle), [Watercraft](#watercraft-cascade-skill), or [Wheeled Vehicle](#wheeled-vehicle).

### Veterinary Medicine

The individual has training and skill in the medical care and treatment of animals. This skill represents the character's ability to provide animals with emergency care, short term care, long-term care, and specialized treatment for diseases, poisons and debilitating injuries.

### Watercraft (Cascade Skill)

The various specialties of this skill cover different types of watercraft and ocean travel. When this skill is received, the character must immediately select one of the following: [Motorboats](#motorboats), [Ocean Ships](#ocean-ships), [Sailing Ships](#sailing-ships) or [Submarine](#submarine).

### Wheeled Vehicle

This skill grants the ability to properly maneuver and perform basic, routine maintenance on automobiles and similar wheeled vehicles.

### Winged Aircraft

This skill grants the ability to properly maneuver and perform basic, routine maintenance on jets and other airplanes using a lifting body. Winged aircraft must keep moving forwards or they will stall and fall out of the sky.

### Zero-G

The character is acclimated to working and living in micro-gravity environments and freefall. The character is trained and familiar with the use of weapons and combat in such environments. In addition, the individual has been trained in the wearing, care, and maintenance of all types of Vacuum Suits and Combat Armor commonly used in these conditions.

## Gaining New Skill Levels during Game Play

A character's Skill Total is calculated by summing the levels of each skill (level zero skills count as zero). A character with Mechanics 1 and Slug Pistol 2 would have a Skill Total of 3.

To increase a skill, a character must train for a number of weeks equal to his current Skill Total plus the desired level of the skill. So, to advance from Piloting 2 to Piloting 3 with a current Skill Total of 3 would take (three, plus three) six weeks. A character may only train one skill in a given week.

The Jack of all Trades skill cannot be learned.
