import { Recipe } from '../models/recipe.interface';

export const RECIPES: Recipe[] = [
  {
    name: 'Pasta al sugo',
    procedure:
      "1. Porta a ebollizione una pentola d'acqua salata. \n2. Cuoci la pasta secondo le istruzioni. \n3. In una padella, soffriggi l'aglio tritato in olio d'oliva. \n4. Aggiungi il pomodoro pelato e cuoci a fuoco medio per 15 minuti. \n5. Regola di sale e aggiungi basilico fresco. \n6. Scola la pasta e mescolala con il sugo, servendo caldo.",
    ingredients: [
      { name: 'Pasta' },
      { name: 'Pomodoro pelato' },
      { name: 'Aglio' },
      { name: "Olio d'oliva" },
      { name: 'Sale' },
      { name: 'Basilico fresco' },
    ],
  },
  {
    name: 'Risotto ai funghi',
    procedure:
      '1. Pulisci i funghi e tagliali a fette sottili. \n2. In una pentola, fai soffriggere cipolla tritata in olio e burro. \n3. Aggiungi i funghi e cuoci per 5 minuti. \n4. Versa il riso e fallo tostare per 2 minuti. \n5. Sfuma con vino bianco e mescola fino a evaporazione. \n6. Aggiungi brodo caldo poco alla volta, mescolando, fino a cottura del riso (circa 18 minuti). \n7. Spegni il fuoco, aggiungi burro e parmigiano e mescola. \n8. Copri e lascia riposare per 2 minuti prima di servire.',
    ingredients: [
      { name: 'Riso' },
      { name: 'Funghi' },
      { name: 'Cipolla' },
      { name: "Olio d'oliva" },
      { name: 'Burro' },
      { name: 'Brodo vegetale' },
      { name: 'Vino bianco' },
      { name: 'Parmigiano' },
    ],
  },
  {
    name: 'Insalata di quinoa',
    procedure:
      "1. Sciacqua bene la quinoa sotto acqua fredda. \n2. Cuoci la quinoa in acqua bollente salata per circa 15 minuti, poi scolala e lasciala raffreddare. \n3. Taglia pomodori, cetrioli e cipolla a cubetti. \n4. Mescola la quinoa con le verdure tagliate, aggiungi prezzemolo e menta tritati. \n5. Condisci con olio d'oliva, succo di limone, sale e pepe. \n6. Servi fredda o a temperatura ambiente.",
    ingredients: [
      { name: 'Quinoa' },
      { name: 'Pomodori' },
      { name: 'Cetrioli' },
      { name: 'Cipolla' },
      { name: 'Prezzemolo' },
      { name: 'Menta' },
      { name: "Olio d'oliva" },
      { name: 'Succo di limone' },
      { name: 'Sale' },
      { name: 'Pepe' },
    ],
  },
  {
    name: 'banana con lo zucchero',
    procedure:
      "1. Sciacqua bene la quinoa sotto acqua fredda. \n2. Cuoci la quinoa in acqua bollente salata per circa 15 minuti, poi scolala e lasciala raffreddare. \n3. Taglia pomodori, cetrioli e cipolla a cubetti. \n4. Mescola la quinoa con le verdure tagliate, aggiungi prezzemolo e menta tritati. \n5. Condisci con olio d'oliva, succo di limone, sale e pepe. \n6. Servi fredda o a temperatura ambiente.",
    ingredients:
       [
        { name: 'Banana' },
       { name: 'Zucchero' }
      ],
  },
];
