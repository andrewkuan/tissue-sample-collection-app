# Tissue Sample Collection Web App

Hosted Link: https://tissue-sample-collection-app.web.app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# Guide to Use Tissue Sample Collection Web App

This Web Application is a Tissue Sample Collection Minimum Viable Product which has the following features:

- Display the list of tissue collections
- Display the details of each tissue collections alongside with their associated samples
- Add new tissue samples to an existing tissue collection
- Add new tissue collections
- Delete existing tissue samples
- Delete existing tissue collections

The Web Application uses FireBase Cloud FireStore database to store its data entries.

## Display the list of tissue collections

The home page of the web application contains a table which shows the full list of tissue collections. The details shown are their Id, Title and Disease Term.

There are two buttons to the right of table. The first button provides the function to reveal more detail of each tissue collection. The second button provides the function to delete the tissue collection entry from the database.

Below the table is a button which provides the function to add new tissue collections to the database.

## Display the details of each tissue collections alongside with their associated samples

From the home page, each tissue collections displayed has two buttons on their right. The first button provides the function to reveal more detail of each tissue collection. 

Upon clicking that button, it will bring you to a new page where it displays the detailed Title and Disease Term of the tissue collection and also all the tissue samples which are associated with this tissue collection.

The top section of the page shows the details of the chosen tissue collection. The details shown are the Id, Title and Disease Term.

The middle section of the page is a table which shows the full list of tissue samples which are associated with the chosen tissue collection. The details shown on the table are Id, Donor Count, Material Type and Last Updated Info.

Below the table is a button which provides the function to add new tissue samples which are associated with the chosen tissue collection to the database.

## Add new tissue samples to an existing tissue collection

From the page contain the details of the chosen tissue collection, there is a button below the table containing all the tissue samples which are associated with the chosen tissue collection.

Upon clicking the button, a form will show up which allows you to enter the Id, Donor Count, Material Type and Last Updated info for the tissue sample which you would like to add into the database. Once the form is filled and submitted, the page will be refreshed with the new tissue sample entry which you've just added.

## Add new tissue collections

From the home page, there is a button below the tissue collections the table. The buttom provides the function to add new tissue collections to the database.

Upon clicking the button, a form will show up which allows you to enter the Id, Title and Disease Term for the tissue collection which you would like to add into the database. Once the form is filled and submitted, you will be brought into the page containing the details of the tissue collection which you have just added.

## Delete existing tissue samples

From the page contain the details of the chosen tissue collection, there is a button at the right of each tissue sample entry in the associated tissue sample table. The button provides the function to delete the chosen tissue sample entry from the database.

Upon clicking that button, a popup will appear for a confirmation to delete the entry. Once confirmed, the tissue sample entry will be deleted from the database and will no longer be shown on the web application.

## Delete existing tissue collections

From the home page, each tissue collections entries displayed has two buttons on their right. The second button provides the function to delete the chosen tissue collection entry from the database.

Upon clicking that button, a popup will appear for a confirmation to delete the entry. Once confirmed, the tissue collection entry will be deleted from the database and will no longer be shown on the web application.