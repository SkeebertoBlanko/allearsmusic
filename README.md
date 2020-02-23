This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
--
--
Software: Editor (VS-Code)
Web/Datenbankserver (XAMPP)
Datenbankverwaltung (MySQL Workbench) -> Client only installtion ausreichend
	nutze PHP-MyAdmin um Database- und XAMPP-Server zu prüfen
	Falls Probleme mit der aktuellen Workbench-Version, dann nutze eine ältere

Dokumentation in Word erstellen:
Warum wurde die WSoftware gewählt? -> evtl. Probleme bei der Installtion
Screenshot der Datenbanktabelle
Forard Engineering (WorkBench) für MySQL-Statements

Datenbanken:
Normalisierungsformen gewüscht; nicht zwingend erforderlich -> erklären können warum die Wahl so getroffen wurde

Relationen einer Datenbank:
1:1
1:n
n:m

MySQL-Workbench Workflow:
New Modell -> Add table
Tabellen erstellen ohne Fremdschlüssel
-> Add Diagramm: Tabellen reinziehen und Fremdschlüssel erstellen
-> Forward Engineering für SQL-Befehle (nötig für Dokumentation)
	-bei einem Syntax Fehler:
	Öffne PHPMyAdmin gehe auf neue Datenbank und füge den Code dort ein, die Syntax Highlight erleichtert die Fehlersuche
neue Datensätze am einfachsten über PHPMyAdmin einfügen

bisher wurden nur lesende MySQL/PHP Befehle benötigt


HTML/CSS nicht wirklich wichtig -> ausschlaggebend ist die Funktionalität
HTML-Grundgerüst beachten !
<form action="get/post"> (get schickt Parameter in der URL mit; post nicht -> daher ist post zu bevorzugen)
 
In der folgenden SQL-Abfrage sind 90% des benötigten Wissens enthalten:

SELECT ausleihen.*, buecher.*, personen.* FROM 'ausleihen'
INNER JOIN buecher ON ausleihen.Buecher_idBuecher = buecher.idBuecher
INNER JOIN personen ON ausleihen.Personen_idPersonen = personen.idPersonen
WHERE ausleihen.RueckgabeDatum IS NULL

