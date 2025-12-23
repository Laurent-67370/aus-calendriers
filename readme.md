# 🏓 AUS Tennis de Table - Portail des Calendriers

Ce projet est une **Landing Page (Page d'accueil)** permettant aux membres du club *Alsatia Unitas Schiltigheim* d'accéder rapidement aux calendriers et scores des 3 équipes de compétition pour la saison 2025-2026.

Le site est conçu comme une **PWA (Progressive Web App)**, ce qui signifie qu'il peut être installé sur un téléphone comme une application native et fonctionner hors ligne.

## 📂 Structure du projet (3 fichiers)

Le projet est ultra-léger et ne nécessite aucune compilation. Il se compose uniquement de ces 3 fichiers :

### 1. `index.html`
C'est le cœur du projet. Il contient :
*   **La structure (HTML)** : Les cartes des équipes, le footer, les modales d'aide.
*   **Le style (CSS)** : Tout le design, le mode sombre/clair, les animations et la responsivité mobile.
*   **La logique (JS)** : La gestion du thème, l'installation de la PWA et l'interaction avec le Service Worker.
*   *Note : Les icônes sont intégrées directement en SVG (Data URI) pour éviter des fichiers images externes.*

### 2. `manifest.json`
C'est la carte d'identité de l'application. Il permet au navigateur de considérer le site comme une application installable. Il définit :
*   Le nom de l'application (affiché sous l'icône sur l'écran d'accueil).
*   Les couleurs du thème (barre d'état du téléphone).
*   L'icône de l'application.
*   Le mode d'affichage (`standalone` pour cacher la barre d'URL du navigateur).

### 3. `sw.js` (Service Worker)
C'est le script qui tourne en arrière-plan pour gérer le **mode hors ligne**.
*   À la première visite, il met en cache le fichier `index.html`.
*   Si l'utilisateur revient sans connexion internet, le Service Worker sert la version en cache instantanément.

---

## 🚀 Fonctionnalités PWA (Progressive Web App)

Ce portail a été optimisé pour mobile avec les fonctionnalités suivantes :

1.  **Installation** : Un bouton "Installer l'app" apparaît automatiquement sur les appareils compatibles. L'utilisateur peut ajouter le site sur son écran d'accueil.
2.  **Mode Hors Ligne** : Grâce au fichier `sw.js`, la page se charge même sans réseau (pratique dans les gymnases mal couverts).
3.  **Expérience App-like** : 
    *   Pas de barre d'adresse de navigateur.
    *   Effets tactiles réactifs (suppression du délai de 300ms au clic).
    *   Barre de navigation rapide en bas de l'écran (mobile uniquement).

## 🛠️ Comment déployer ?

Puisque ce site est statique (HTML/CSS/JS uniquement), vous pouvez l'héberger gratuitement partout.

**Recommandation (Netlify) :**
1.  Créez un dossier contenant les 3 fichiers (`index.html`, `manifest.json`, `sw.js`).
2.  Connectez-vous sur [Netlify Drop](https://app.netlify.com/drop).
3.  Glissez-déposez le dossier.
4.  C'est en ligne ! 

⚠️ **Important pour la PWA** : Pour que l'installation et le Service Worker fonctionnent, le site **doit** être servi en **HTTPS** (ce que Netlify, Vercel ou GitHub Pages font par défaut).

## ✏️ Personnalisation

Si vous souhaitez modifier les liens vers les calendriers des équipes, cherchez ces lignes dans `index.html` :

```html
<!-- Équipe 1 -->
<a href="https://votre-lien-equipe-1..." ...>

<!-- Équipe 2 -->
<a href="https://votre-lien-equipe-2..." ...>

<!-- Équipe 3 -->
<a href="https://votre-lien-equipe-3..." ...>