# Resource Pack Builder
A web interface for building resource packs for Minecraft

## How to Run
This project is built in Angular, with Bootstrap Styling. It uses two additional libraries: JSZip and FileSaver.

### Installing Angular
```
npm install -g @angular/cli
```

### Installing Libraries
#### Using packages.json:
In /pack-builder/src, type command:
```
npm install
```
#### Manually Install Libraries:
In /pack-builder/src, type commands:
JSZip
```
npm install @types/jszip
```
FileSaver
```
npm install @types/file-saver
```
### Run Website Locally
In /pack-builder
```
ng serve --open
```
Web browser should automatically open. If not, open browswer an navigate to http://localhost:4200.

## Requirements
Some original requirements have been scoped back whether due to Prof. Mark's comments or have been replaced with alternatives. Reasons and change descriptions are listed directly below the changed/removed features.
- [x] Database containing all Resources
  - Prof. Mark suggested that I scope back and use some temp files if I could not get a database working. I could not get a database working.  
  - However there is a client-side framework in place that would enable me to send a JSON to a database if there were one in place.
- [x] Resource Pack Builder
- [x] Downloads
- [x] Thematically appropriate custom assets
- [x] Embedded Images of each resource option
- [x] Links for previous pre-made resource packs
- [ ] Analytics to see the most popular textures / Data Visualization
  - Removed, because after scoping back to a local database with temp data, this became unneeded
  - Replaced with a 'Pack History' tab, that allows users to see Resource Packs they have previously built, and download them again. Uses local storage.
- [x] Donate Button
- [x] Contact Me with Outward Email Form
- [x] "How To" Page
  - Originally a bonus feature, but I added it back into the requirements to make up for the aforementioned scope back.

## Sources
Documentation:
- https://getbootstrap.com/docs/4.5/getting-started/introduction/
- https://angular.io/docs
- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- https://developer.mozilla.org/en-US/docs/Web/HTML
- https://stuk.github.io/jszip/documentation/examples.html

Specific Code:
- https://stackoverflow.com/questions/53025027/dynamic-list-of-radiobuttons-in-angular
- https://stackoverflow.com/questions/4782068/can-i-set-subject-content-of-email-using-mailto

