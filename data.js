
var decks = [];


let d; // Temporary deck buffer

///////////
// Tarot //
///////////
d = {
	name: "Tarot",
	images: ["tarot_1.png", "tarot_2.png"],
	backImage: "tarot_back.jpg",
	w: 551,
	h: 945,
	cards: []
};
for (var i = 0; i < 10; i++)
{
	for (var k = 0; k < 6; k++)
	{
		if (i == 0 && k == 0) { continue; } // skip first card
		if (i > 6 && k == 5) { continue; }
		d.cards.push([0, i * d.w, k * d.h]);
	}
	for (var k = 0; k < 3; k++)
	{
		if (i > 1 && k == 2) { continue; }
		d.cards.push([1, i * d.w, k * d.h]);
	}
}
decks.push(d);
