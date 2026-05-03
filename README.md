# Quiz — L'Art du Teasing | Guide de déploiement Vercel

## Structure du projet

```
quiz-teasing/
├── index.html      ← Page principale du quiz
├── style.css       ← Charte graphique Nosimpszone
├── quiz.js         ← Logique, questions & scoring
├── vercel.json     ← Config Vercel
└── README.md       ← Ce fichier
```

---

## ÉTAPE 1 — Ajoute tes liens Drive dans quiz.js

Ouvre `quiz.js` et cherche la section `CONFIGURATION` tout en haut.
Remplace chaque `https://drive.google.com/LIEN_XXXXX` par le vrai lien Drive de ton PDF.

```js
const PROFILES = {
  F: { ..., link: 'https://drive.google.com/file/d/TON_ID/view' },
  S: { ..., link: 'https://drive.google.com/file/d/TON_ID/view' },
  T: { ..., link: 'https://drive.google.com/file/d/TON_ID/view' },
  R: { ..., link: 'https://drive.google.com/file/d/TON_ID/view' },
  B: { ..., link: 'https://drive.google.com/file/d/TON_ID/view' },
  C: { ..., link: 'https://drive.google.com/file/d/TON_ID/view' },
};
```

**Important :** Dans Google Drive, clique droit sur ton PDF → "Obtenir le lien"
→ Change en "Tout le monde avec le lien peut consulter" → Copie le lien.

---

## ÉTAPE 2 — Crée un compte GitHub (si pas déjà fait)

1. Va sur https://github.com
2. Crée un compte gratuit
3. Clique sur **"New repository"** (bouton vert)
4. Nom du repo : `quiz-teasing` (ou ce que tu veux)
5. Laisse tout par défaut → clique **"Create repository"**

---

## ÉTAPE 3 — Upload les fichiers sur GitHub

Sur la page de ton nouveau repo vide :
1. Clique **"uploading an existing file"**
2. Glisse-dépose les 4 fichiers : `index.html`, `style.css`, `quiz.js`, `vercel.json`
3. Clique **"Commit changes"**

---

## ÉTAPE 4 — Déploie sur Vercel

1. Va sur https://vercel.com
2. Clique **"Sign Up"** → connecte-toi avec ton compte **GitHub**
3. Clique **"Add New Project"**
4. Trouve ton repo `quiz-teasing` → clique **"Import"**
5. Ne change rien aux paramètres → clique **"Deploy"**
6. Attends 30 secondes → ✅ Ton quiz est en ligne !

Vercel te donne une URL du type :
`https://quiz-teasing.vercel.app`

---

## ÉTAPE 5 — Domaine personnalisé (optionnel)

Si tu veux une URL du type `quiz.nosimpszone.com` :
1. Dans Vercel → ton projet → onglet **"Domains"**
2. Ajoute ton domaine
3. Suis les instructions DNS de Vercel

---

## Mettre à jour les liens Drive après déploiement

1. Modifie `quiz.js` sur GitHub (clique le fichier → icône crayon)
2. Remplace les liens
3. Clique **"Commit changes"**
4. Vercel redéploie automatiquement en moins de 30 secondes ✅

---

## Les 6 profils et leurs PDFs à créer

| Profil | Code | PDF à créer |
|--------|------|-------------|
| Le Fantôme | F | Programme : oser agir malgré la peur |
| Le Serviteur | S | Programme : créer de la tension vs du confort |
| Le Transparent | T | Programme : occuper l'espace avec intention |
| Le Rigide | R | Programme : introduire la légèreté sans perdre le cadre |
| Le Brûleur | B | Programme : maîtriser le rythme et la lenteur |
| Le Calculateur | C | Programme : reconnecter action et instinct |
