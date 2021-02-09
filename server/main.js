import { Meteor } from 'meteor/meteor';
import dotenv from "dotenv";

Meteor.startup(() => {
    dotenv.config({
        path: Assets.absoluteFilePath('.env'),
    });
});
