# Portfolio de Khalil Ben Ali

Site personnel qui présente mon parcours, mes stages, mes projets et mes compétences.
C'est un site statique en HTML, CSS et JavaScript, sans framework et sans étape de compilation.
Il est prêt à être publié sur Vercel.

Adresse de production : à remplacer par la vôtre après le premier déploiement.

---

## 1. Contenu du site

Le site est découpé en sections, dans cet ordre :

1. **Accueil** : nom, titre, photo, chiffres clés, boutons de contact et téléchargement du CV
2. **Profil** : présentation et points clés
3. **Expériences** : 6 stages, du plus récent au plus ancien
4. **Projets** : 3 projets académiques, dont le hackathon « AI for All »
5. **Formation** : cycle ingénieur et licence
6. **Compétences** : 7 catégories techniques
7. **Certifications** : certifications cloud, IoT et data
8. **Contact** : e-mail, téléphone, LinkedIn, GitHub

Le compteur affiché en haut de page (stages, projets, certifications, domaines) est calculé
automatiquement à partir des données. Il n'y a rien à modifier à la main.

---

## 2. Technologies utilisées

- **HTML5** pour la structure
- **CSS3** pour la mise en forme (thème clair, thème sombre automatique, responsive, impression)
- **JavaScript natif** pour l'affichage des données et les interactions
- **Aucune dépendance** : pas de React, pas de Tailwind, pas de bundler

Ce choix a plusieurs avantages :

- pas de `npm install` ni de build avant publication
- Vercel sert directement les fichiers du dépôt
- le site reste rapide et simple à maintenir
- une panne de dépendance ne peut pas casser la mise en ligne

La seule ressource externe est Google Fonts (polices Inter et JetBrains Mono). Si vous voulez
supprimer cette dépendance, retirez la ligne `<link>` correspondante dans `index.html` et le site
utilisera les polices système.

---

## 3. Arborescence

```
khalilcvprotf/
├── index.html                     structure de la page
├── vercel.json                    configuration Vercel (cache, en-têtes de sécurité)
├── robots.txt                     règles pour les moteurs de recherche
├── sitemap.xml                    plan du site
├── .gitignore                     fichiers exclus de Git
├── README.md                      ce fichier
└── assets/
    ├── css/
    │   └── styles.css             tout le design
    ├── js/
    │   ├── content.js             données du CV (à modifier pour changer le contenu)
    │   └── main.js                affichage et interactions
    ├── img/
    │   ├── profile.jpg            photo principale, 512 x 512
    │   ├── avatar.jpg             version 192 x 192, pour le partage et le mobile
    │   └── favicon.png            icône de l'onglet, 64 x 64
    └── cv/
        └── Khalil-Ben-Ali-CV.pdf  CV téléchargeable depuis le site
```

Le texte visible sur le site se trouve uniquement dans `assets/js/content.js`.
Le fichier `index.html` ne contient que la structure : titres, conteneurs, icônes SVG.
Le style est centralisé dans `assets/css/styles.css`.

---

## 4. Voir le site en local

### Méthode rapide

Double-cliquez sur `index.html`. Le site s'ouvre dans le navigateur et fonctionne normalement,
car il n'y a ni serveur ni requête réseau interne.

### Méthode recommandée

Pour tester dans les mêmes conditions qu'en production, lancez un petit serveur local.
Node.js est déjà installé sur cette machine :

```powershell
cd C:\Users\Pc\Desktop\khalilcvprotf
npx serve .
```

Ouvrez ensuite l'adresse affichée, par exemple `http://localhost:3000`.
Pour arrêter le serveur, appuyez sur `Ctrl + C`.

Si vous préférez Python :

```powershell
python -m http.server 8080
```

Puis ouvrez `http://localhost:8080`.

---

## 5. Modifier le contenu

Ouvrez `assets/js/content.js` dans VS Code, Notepad++ ou n'importe quel éditeur de texte.
Le fichier est commenté et organisé par blocs.

```
CV_DATA
├── identity          nom, titre, coordonnées, liens, photo, CV
├── profile           paragraphes de présentation et points clés
├── experience        tableau des stages
├── projects          tableau des projets
├── education         tableau des formations
├── skills            compétences par catégorie
├── certifications    certifications
├── languages         langues et niveaux
├── associations      activités associatives
└── contact           textes de la section contact
```

### 5.1 Coordonnées

```js
identity: {
  firstName: 'Khalil',
  lastName: 'Ben Ali',
  title: 'Étudiant Ingénieur en Génie Informatique',
  subtitle: 'Spécialisation IoT et Robotique',
  location: 'Sousse, Tunisie',
  phoneLabel: '+216 92 315 464',   // texte affiché
  phoneHref: '+21692315464',       // utilisé par le lien tel:, sans espaces
  email: 'khaalil.benali@gmail.com',
  linkedin: 'https://www.linkedin.com/in/Khaalil-Ben-Ali/',
  github: 'https://github.com/khaalilbenali',
  cvFile: 'assets/cv/Khalil-Ben-Ali-CV.pdf',
  availability: 'Ouvert à un stage de fin d’études (PFE)'
}
```

Le champ `phoneHref` doit contenir uniquement des chiffres et un éventuel `+`.
Le champ `phoneLabel` peut garder les espaces pour la lisibilité.

### 5.2 Ajouter un stage

Copiez un bloc du tableau `experience` et placez-le en premier pour qu'il apparaisse en haut
de la liste. L'ordre du tableau est l'ordre d'affichage.

```js
{
  role: 'Stagiaire en Systèmes Embarqués et IoT',
  company: 'No Limits Embedded',
  location: 'Sousse, Tunisie · hybride',
  period: 'Juil. 2026',
  tasks: [
    'Participation à des projets embarqués et IoT.',
    'Développement et test de prototypes de solutions connectées.'
  ]
}
```

Chaque entrée doit avoir `role`, `company`, `location`, `period` et un tableau `tasks`.
Le dernier élément de `tasks` ne doit pas être suivi d'une virgule.

### 5.3 Ajouter un projet

```js
{
  name: 'Nom du projet',
  kind: 'Projet académique',        // ou '1er Prix', 'Projet de fin d’études'
  org: 'EPI International Multidisciplinary School',
  location: 'Sousse, Tunisie',
  period: 'Sept. 2025 – Juin 2026',
  badge: 'ESP32 · Angular · Firebase',
  highlight: false,                 // true met la carte en avant (prix, distinction)
  tasks: [
    { label: 'Conception', text: 'Description courte.' },
    { label: 'Résultat', text: 'Ce qui a été obtenu.' }
  ]
}
```

Le champ `badge` est la ligne de technologies affichée sur la carte.
Le champ `highlight` sert à mettre en valeur le hackathon.

### 5.4 Modifier les compétences

```js
{ category: 'Intelligence artificielle', icon: 'chip', items: ['TensorFlow', 'scikit-learn'] }
```

Icônes disponibles : `chip`, `code`, `wifi`, `layout`, `cloud`, `bolt`, `tool`,
`graduation`, `briefcase`, `pin`, `calendar`, `award`, `trophy`.

### 5.5 Langues

Le niveau va de 1 à 5. Il sert à calculer la largeur de la barre.

```js
{ name: 'Français', level: 4, label: 'Professionnel' }
```

Le libellé `label` est purement informatif, il ne modifie pas la barre.

### 5.6 Formations et certifications

Les deux tableaux suivent le même principe que les stages. Une formation en cours utilise
`current: true`, ce qui affiche le badge « En cours ».

---

## 6. Remplacer la photo ou le CV

| Fichier | Dimensions conseillées | Usage |
| --- | --- | --- |
| `assets/img/profile.jpg` | carré, 512 x 512 | photo de la page d'accueil |
| `assets/img/avatar.jpg` | carré, 192 x 192 | aperçu lors du partage sur les réseaux |
| `assets/img/favicon.png` | 64 x 64 | icône de l'onglet |
| `assets/cv/Khalil-Ben-Ali-CV.pdf` | PDF | bouton « Télécharger le CV » |

Le plus simple est d'écraser le fichier en gardant le même nom. Sinon, changez le chemin dans
`content.js` (`photo`, `avatar`, `cvFile`).

Un portrait carré fonctionne mieux, car le cadre est arrondi et la photo est recadrée au centre.

---

## 7. Publier sur GitHub

Git n'est pas installé sur cette machine. Installez-le d'abord :

https://git-scm.com/download/win

Laissez les options par défaut, puis ouvrez un nouveau terminal et vérifiez :

```powershell
git --version
```

### 7.1 Créer le dépôt

1. Ouvrez https://github.com et connectez-vous.
2. Cliquez sur le bouton `+` en haut à droite, puis **New repository**.
3. Nom du dépôt : `khalil-portfolio`.
4. Visibilité : **Public** (Vercel lit aussi les dépôts privés).
5. Ne cochez aucune case (pas de README, pas de .gitignore).
6. Cliquez sur **Create repository**.

### 7.2 Envoyer les fichiers

```powershell
cd C:\Users\Pc\Desktop\khalilcvprotf

git init
git branch -M main
git add .
git commit -m "Portfolio initial - Khalil Ben Ali"
git remote add origin https://github.com/VOTRE-COMPTE/khalil-portfolio.git
git push -u origin main
```

Remplacez `VOTRE-COMPTE` par votre identifiant GitHub.

Au premier `push`, une fenêtre de connexion GitHub peut s'ouvrir. Sinon, Git demande un mot de
passe : utilisez un token personnel (voir la section Dépannage).

Les fichiers `.docx` et les PDF de travail présents dans le dossier ne seront pas envoyés :
ils sont listés dans `.gitignore`.

---

## 8. Déployer sur Vercel

1. Ouvrez https://vercel.com et cliquez sur **Sign Up**.
2. Choisissez **Continue with GitHub** et autorisez l'accès aux dépôts.
3. Sur le tableau de bord, cliquez sur **Add New...** puis **Project**.
4. Sélectionnez le dépôt `khalil-portfolio` et cliquez sur **Import**.
5. Dans la configuration, laissez les valeurs suivantes :

| Champ | Valeur |
| --- | --- |
| Framework Preset | Other |
| Root Directory | `./` |
| Build Command | vide |
| Output Directory | vide |
| Install Command | vide |

6. Cliquez sur **Deploy**.

Le site est en ligne en moins d'une minute. L'adresse ressemble à
`https://khalil-portfolio.vercel.app`.

Pour une adresse plus courte, allez dans **Settings**, **Project Name**, et renommez le projet
en `khalil-ben-ali`. L'adresse devient alors `https://khalil-ben-ali.vercel.app`.

Chaque `push` sur la branche `main` déclenchera un nouveau déploiement automatique.

---

## 9. Après la première mise en ligne

Une fois l'adresse réelle connue, remplacez `https://khalil-ben-ali.vercel.app` par la vôtre
dans trois fichiers :

- `index.html` : balise `<link rel="canonical">` et balise `og:url`
- `robots.txt` : ligne `Sitemap:`
- `sitemap.xml` : balise `<loc>`

Puis publiez la modification (voir la section suivante).

---

## 10. Mettre à jour le site

Après chaque modification de contenu, de photo ou de style :

```powershell
cd C:\Users\Pc\Desktop\khalilcvprotf

git add .
git commit -m "Ajout du stage No Limits Embedded"
git push
```

Vercel détecte le `push` et republie le site automatiquement. Il n'y a aucune commande de
déploiement à lancer.

Pour suivre la publication : tableau de bord Vercel, onglet **Deployments**.

Pour revenir à une version précédente : ouvrez le déploiement concerné, cliquez sur les trois
points, puis sur **Promote to Production**.

### Messages de commit utiles

```powershell
git commit -m "Mise à jour des compétences"
git commit -m "Correction du texte de présentation"
git commit -m "Nouvelle photo de profil"
git commit -m "Ajout d'un projet"
```

Un message court et précis suffit. Il sert à retrouver une modification dans l'historique.

---

## 11. Nom de domaine personnel (optionnel)

1. Achetez un domaine chez un registrar, par exemple `khalilbenali.tn` ou `khalil-ben-ali.dev`.
2. Dans Vercel, ouvrez le projet, puis **Settings** et **Domains**.
3. Cliquez sur **Add** et saisissez le domaine.
4. Vercel affiche les enregistrements DNS à créer chez le registrar :
   - domaine racine (`exemple.com`) : enregistrement **A** vers `76.76.21.21`
   - sous-domaine (`www`) : enregistrement **CNAME** vers `cname.vercel-dns.com`
5. Ajoutez ces enregistrements dans l'interface du registrar.
6. Attendez la propagation, de quelques minutes à 24 heures.

Vercel crée et renouvelle automatiquement le certificat HTTPS.

---

## 12. Fonctionnement du design

### Couleurs

Les couleurs sont définies en haut de `assets/css/styles.css`, dans le bloc `:root`.
Pour changer la couleur principale, modifiez `--brand` et `--brand-strong` :

```css
:root {
  --brand: #0b5f80;
  --brand-strong: #084c66;
  --brand-soft: #e7f2f7;
}
```

Le thème sombre utilise un second bloc, activé automatiquement par le système
d'exploitation du visiteur via `prefers-color-scheme`. Aucun bouton n'est nécessaire.

### Responsive

Le site s'adapte à trois tailles principales :

- ordinateur : à partir de 1024 px
- tablette : de 560 à 1024 px
- téléphone : moins de 560 px

Le menu se transforme en bouton hamburger sous 780 px.

### Impression

Une feuille de style dédiée s'active avec `Ctrl + P`. Le résultat ressemble à un CV papier :
pas de menu, pas de bouton, fond blanc, texte noir.

### Accessibilité

Le site utilise des liens d'évitement, des attributs `aria`, un focus visible au clavier et des
contrastes conformes. Les animations sont désactivées si le visiteur a activé
« réduire les animations » dans son système.

---

## 13. Dépannage

**`git` n'est pas reconnu**

Git n'est pas installé ou le terminal n'a pas été redémarré. Installez Git, fermez puis
rouvrez PowerShell.

**Le `push` demande un mot de passe et échoue**

GitHub n'accepte plus les mots de passe simples. Créez un token :
GitHub, **Settings**, **Developer settings**, **Personal access tokens**, **Tokens (classic)**,
**Generate new token**, cochez la portée `repo`, créez le token, puis collez-le à la place du
mot de passe.

**La page s'affiche sans style sur Vercel**

Vérifiez que le fichier s'appelle bien `index.html`, en minuscules, à la racine du dépôt.
Vérifiez aussi que le dossier `assets` a bien été envoyé.

**Une modification n'apparaît pas**

Attendez la fin du déploiement dans l'onglet **Deployments**, puis rechargez avec `Ctrl + F5`
pour vider le cache du navigateur.

Vérifiez que le commit a bien été poussé :

```powershell
git log --oneline -3
```

**Vercel affiche une erreur 404**

Dans **Settings**, **General**, le champ *Root Directory* doit être vide ou `./`.

**Les accents s'affichent mal**

Les fichiers doivent être enregistrés en UTF-8. Dans VS Code, regardez l'encodage en bas à
droite de la fenêtre et choisissez **UTF-8** si nécessaire.

**La photo ne s'affiche pas**

Vérifiez que le nom du fichier dans `content.js` correspond exactement au fichier présent dans
`assets/img`, majuscules comprises.

---

## 14. Vérifications avant publication

- [ ] Le texte de présentation correspond au CV le plus récent
- [ ] Les stages et les projets sont à jour
- [ ] Les niveaux de langues sont ceux à afficher
- [ ] La photo et le PDF du CV sont les bonnes versions
- [ ] Le lien LinkedIn s'ouvre sur le bon profil
- [ ] Le lien GitHub s'ouvre sur le bon compte
- [ ] L'adresse `canonical`, `robots.txt` et `sitemap.xml` pointent vers le domaine réel
- [ ] Le site a été testé sur téléphone
- [ ] Le téléchargement du CV fonctionne

---

## 15. Droits

Le contenu, les textes et les images de ce site appartiennent à Khalil Ben Ali.
Merci de ne pas les réutiliser sans autorisation.
