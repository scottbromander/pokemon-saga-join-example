CREATE TABLE pokemon
(
    "id" serial primary key,
    "name" VARCHAR(80),
    "description" VARCHAR(1000),
    "images" VARCHAR(120)
);

CREATE TABLE pokemon_type
(
    "id" serial primary key,
    "pokemon_id" INT REFERENCES "pokemon",
    "type_id" INT REFERENCES "type"
);

CREATE TABLE type
(
    "id" serial primary key,
    "description" VARCHAR(80)
);

INSERT INTO "pokemon"
    ("name","description","images")
VALUES
    ('Charizard', 'Charizard is a dual-type Fire/Flying Pokémon introduced in Generation I. It evolves from Charmeleon starting at level 36. It is the final form of Charmander. Charizard has three other forms.', 'images/charizard.png'),
    ('Pikachu', 'Pikachu are small, mouse-like Pokémon that have short, yellow fur with brown markings covering their backs and parts of their tails. They have black-tipped, pointy ears and red circles on their cheeks, which are said to contain "electrical sacs". Their tails are shaped in the form of a lightning bolt.', 'images/pikachu.png'),
    ('Eevee', 'Eevee is a Normal-type Pokémon introduced in Generation I. It evolves into one of eight different Pokémon through various methods: Eevee evolves into Vaporeon when exposed to a Water Stone. Eevee evolves into Jolteon when exposed to a Thunder Stone.', 'images/eevee.png'),
    ('Snorlax', 'Snorlax, the Sleeping Pokémon and the evolved form of Munchlax. It can eat 400 pounds of food before feeling full. Snorlax, the Sleeping Pokémon. Snorlax becomes much too lazy to lift even a finger when it has a full belly, which then makes it safe to bounce upon.', 'images/snorlax.png'),
    ('Mewtwo', 'Mewtwo is a Pokémon created by science. It is a bipedal, humanoid creature with some feline features. It is primarily gray with a long, purple tail. On top of its head are two short, blunt horns, and it has purple eyes.', 'images/mewtwo.png'),
    ('Celebi', 'Celebi is a dual-type Psychic/Grass Mythical Pokémon introduced in Generation II. It is not known to evolve into or from any other Pokémon. It serves as the guardian of Ilex Forest.', 'images/celebi.png'),
    ('Lucario', 'Lucario is a dual-type Fighting/Steel Pokémon introduced in Generation IV. It evolves from Riolu when leveled up with high friendship during the day. Lucario can Mega Evolve into Mega Lucario using the Lucarionite.', 'images/lucario.png');

INSERT INTO "type"
    ("description")
VALUES
    ('fire'),
    ('flying'),
    ('normal'),
    ('electric'),
    ('psychic'),
    ('steel'),
    ('grass'),
    ('fighting');

SELECT *
FROM pokemon;

SELECT pokemon.id, pokemon.name, pokemon.description, pokemon.images, array_agg(type.description) as types
FROM pokemon
    JOIN pokemon_type ON pokemon.id=pokemon_type.pokemon_id
    JOIN type ON pokemon_type.type_id=type.id
GROUP BY pokemon.id
ORDER BY pokemon.id;
