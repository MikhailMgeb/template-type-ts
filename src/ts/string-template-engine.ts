/// шаблонизатор

type DateCocktail = {
    strImageSource: string;
    strDrinkThumb: string;
    strDrink: string;
    strAlcoholic: string;
    strInstructions: string;
}

type Attributes = {
    href?: string;
    style?: string;
}

type Content = {
    block: string;
    cls?: string;
    content?: string;
    attrs?: Attributes;
}

type TypeCocktail = {
    block: string;
    cls?: string | string[];
    attrs?: Attributes;
    content?: TypeCocktail[] | string | Content;
}

type TypeSymbol = {
    readonly '&': '&amp;',
    readonly '<': '&lt;',
    readonly '>': '&gt;',
    readonly '"': '&quot;',
    readonly "'": '&#x27;',
    readonly "/": '&#x2F;',
}

const cocktail: DateCocktail = JSON.parse(`
{
    "idDrink": "11007",
    "strDrink": "Margarita",
    "strDrinkAlternate": null,
    "strTags": "IBA,ContemporaryClassic",
    "strVideo": null,
    "strCategory": "Ordinary Drink",
    "strIBA": "Contemporary Classics",
    "strAlcoholic": "Alcoholic",
    "strGlass": "Cocktail glass",
    "strInstructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
    "strInstructionsES": null,
    "strInstructionsDE": "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der u00e4uu00dfere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genieu00dfers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis schu00fctteln und vorsichtig in das Glas geben.",
    "strInstructionsFR": null,
    "strInstructionsIT": "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.Avere cura di inumidire solo il bordo esterno e cospargere di sale. Il sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.Shakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
    "strInstructionsZH-HANS": null,
    "strInstructionsZH-HANT": null,
    "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    "strIngredient1": "Tequila",
    "strIngredient2": "Triple sec",
    "strIngredient3": "Lime juice",
    "strIngredient4": "Salt",
    "strIngredient5": null,
    "strIngredient6": null,
    "strIngredient7": null,
    "strIngredient8": null,
    "strIngredient9": null,
    "strIngredient10": null,
    "strIngredient11": null,
    "strIngredient12": null,
    "strIngredient13": null,
    "strIngredient14": null,
    "strIngredient15": null,
    "strMeasure1": "1 1/2 oz ",
    "strMeasure2": "1/2 oz ",
    "strMeasure3": "1 oz ",
    "strMeasure4": null,
    "strMeasure5": null,
    "strMeasure6": null,
    "strMeasure7": null,
    "strMeasure8": null,
    "strMeasure9": null,
    "strMeasure10": null,
    "strMeasure11": null,
    "strMeasure12": null,
    "strMeasure13": null,
    "strMeasure14": null,
    "strMeasure15": null,
    "strImageSource": "https://commons.wikimedia.org/wiki/File:Klassiche_Margarita.jpg",
    "strImageAttribution": "Cocktailmarler",
    "strCreativeCommonsConfirmed": "Yes",
    "dateModified": "2015-08-18 14:42:59"
}
`);

function cocktailTemplate(cocktail: DateCocktail): TypeCocktail {
    return {
        block: 'article',
        cls: 'cocktail',
        content: [{
            block: 'header',
            cls: 'cocktail__header',
            content: [{
                block: 'a',
                attrs: {
                    href: cocktail.strImageSource ? cocktail.strImageSource : '#',
                },
                content: {
                    block: 'div',
                    cls: 'cocktail__image',
                    attrs: {
                        style: "background-image: url('" + cocktail.strDrinkThumb + "');",
                    },
                }
            }, {
                block: 'h2',
                cls: 'cocktail__title',
                content: [{
                    block: 'span',
                    cls: 'cocktail__title-text',
                    content: cocktail.strDrink,
                }, {
                    block: 'i',
                    cls: ['fa-solid', cocktail.strAlcoholic === 'Alcoholic' ? 'fa-wine-glass' : 'fa-0'],
                }]
            }],
        }, {
            block: 'div',
            cls: 'cocktail__main',
            content: {
                block: 'p',
                cls: 'cocktail__description',
                content: cocktail.strInstructions,
            }
        }],
    };
}

cocktailTemplate(cocktail);

function sanitize(string) {
    const map: TypeSymbol = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        "/": '&#x2F;',
    };
    const reg = /[&<>"'/]/ig;

    return string.replace(reg, (match) => (map[match]));
}

function stringTemplateEngine(templateWithData: TypeCocktail | boolean):string {
    if ((templateWithData === undefined) || (templateWithData === null) || (templateWithData === false)) {
        return '';
    }

    if ((typeof templateWithData === 'string') || (typeof templateWithData === 'number') || (templateWithData === true)) {
        return String(sanitize(templateWithData));
    }

    if (Array.isArray(templateWithData)) {
        let result = '';

        for (const templateItem of templateWithData) {
            result += stringTemplateEngine(templateItem);
        }

        return result;
    }

    let tag = `<${templateWithData.block}`;

    if (templateWithData.cls) {
        const classes = [].concat(templateWithData.cls).join(' ');

        tag += ` class="${classes}"`;
    }

    if (templateWithData.attrs) {
        for (const [key, value] of Object.entries(templateWithData.attrs)) {
            tag += ` ${key}="${sanitize(value)}"`;
        }
    }

    tag += '>';

    tag += stringTemplateEngine(templateWithData.content);


    tag += `</${templateWithData.block}>`;

    return tag;
}
