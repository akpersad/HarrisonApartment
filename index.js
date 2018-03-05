// Lambda Node.JS
'use strict';
var Alexa = require("alexa-sdk");
var storage = require("./storage");
var appId = 'amzn1.ask.skill.32f73371-3de1-4a20-86d8-c9537b76f196';

exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = appId;
    alexa.registerHandlers(handlers);
    alexa.execute();

};

const handlers = {
    'LaunchRequest': function () {
        var welcomeMessage = 'Hello! I\'m Dee-nexa. How may I help you?';
        this.emit(':ask', welcomeMessage, 'Try again.');
    },

    'TestIntent' : function () {
        this.emit(':tell', 'Nom nom nom');
    },

    // 'EventLookupIntent': function () {
    //     var timeOfDay = '';

    //     if (this.event.request.intent.slots.time_of_day.value === undefined) {
    //         timeOfDay = this.event.request.intent.slots.timeOfDay.value;
    //     } else {
    //         timeOfDay = this.event.request.intent.slots.time_of_day.value;
    //     }

    //     var action = this.event.request.intent.slots.action.value;
    //     var response = '';
    //     //TODO: Function to look up calendar

    //     if (action === undefined) {
    //         response = "You have a meeting at 9:30 with Betty";
    //     } else if (/\d/.exec(action) === null) {
    //         response = "Alright, " + action + "ing your " + timeOfDay + " meetings";
    //     } else {
    //         response = "Alright, " + action + "ing your " + timeOfDay + " meeting";
    //     }

    //     this.emit(':ask', response);
    // },

    // 'PolicyIntent': function () {
    //     var policy = this.event.request.intent.slots.policy.value;
    //     var answer = '';

    //     if (policy === undefined || policy === 'family leave') {
    //         policy = "family leave";
    //         answer = 'Deloitte professionals have an extra layer of support from Deloitte’s Family Leave program that offers up to 16 weeks of fully paid extended family leave to support a range of life events impacting them and their families – from celebrating the arrival of a new child, to caring for a spouse or significant other, to supporting aging parents. Also under this Family Leave program, mothers who give birth are eligible for up to six months of paid time off when factoring in short-term disability for childbirth.';
    //     } else if (policy === 'benefits') {
    //         answer = 'You have a ton of benefits including health insurance, dental, vision and a free car.';
    //     } else if (policy === 'pto') {
    //         answer = 'You get a year off';
    //     } else if (policy === 'holiday') {
    //         answer = 'You get all the holidays.';
    //     } else if (policy === 'project') {
    //         answer = 'You are on all of the projects. No life for you.';
    //     }

    //     //noinspection BadExpressionStatementJS
    //     storage.savePolicyItems(policy, this.event.session, (callback) => {
    //         this.emit(':ask', answer);
    //     });
    // },

    // 'ReadLaterIntent': function () {
    //     var response = '';

    //     //noinspection BadExpressionStatementJS
    //     storage.getPolicyItems(this.event.session, (callback) => {
    //         response = "Okay, I've emailed the " + callback.Policy + " policy to you.";
    //         this.emit(':ask', response);
    //     });
    // },

    // 'TravelWizardIntent': function () {
    //     var transport = this.event.request.intent.slots.transport.value;
    //     var location = this.event.request.intent.slots.location.value;
    //     var travelDate = this.event.request.intent.slots.date.value;
    //     var timeStamp = this.event.request.timestamp;
    //     var response = '';

    //     //TODO: Write function to look up Deloitte Travel

    //     //noinspection JSAnnotator,BadExpressionStatementJS
    //     storage.saveTravelItems(transport, location, travelDate, this.event.session, (callback) => {
    //         response = "Ok, I have found three itineraries for this trip. Would you like to book package 1, package" +
    //             " 2, or package 3?";
    //         this.emit(':ask', response)
    //     });
    // },

    // 'GetTravelWizardIntent': function () {
    //     var package_choice = this.event.request.intent.slots.package_choice.value;
    //     //var timeStamp = this.event.request.timestamp;
    //     var response = '';

    //     //noinspection BadExpressionStatementJS
    //     storage.getTravelItems(this.event.session, (callback) => {
    //         response = "Okay, I've booked " + package_choice + "; a " + callback.Transport + " to " + callback.Location + " on " + callback.TravelDate;
    //         this.emit(':ask', response);
    //     });
    // },

    // 'MeetingWizardIntent': function () {
    //     var office = this.event.request.intent.slots.office.value;
    //     var meetingDate = this.event.request.intent.slots.date.value;
    //     var response = '';

    //     //TODO: Function to turn address into Deloitte office

    //     //noinspection BadExpressionStatementJS
    //     storage.saveMeetingItems(office, meetingDate, this.event.session, (callback) => {
    //         response = 'I see three rooms available at ' + office + ' for ' + meetingDate + '. They are room 1, room' +
    //             ' 2 and room' + ' 3. Which would you like?';
    //         this.emit(":ask", response)
    //     });
    // },

    // 'GetMeetingWizardIntent': function () {
    //     var meetingRoom = this.event.request.intent.slots.meetingRoom.value;
    //     //var timeStamp = this.event.request.timestamp;
    //     var response = '';

    //     //noinspection BadExpressionStatementJS
    //     storage.getMeetingItems(this.event.session, (callback) => {
    //         response = "Great, I've booked " + meetingRoom + " for " + callback.MeetingDate + " at " + callback.Office + ".";
    //         this.emit(':ask', response);
    //     });
    // },

    // 'PersonelIntent': function () {
    //     var name = this.event.request.intent.slots.name.value;
    //     var response = '';

    //     //noinspection BadExpressionStatementJS
    //     storage.savePersonelItems(name, this.event.session, (callback) => {
    //         response = name + " is currently 94% available.";
    //         this.emit(":ask", response)
    //     });
    // },

    'Unhandled': function () {
        this.emit(':ask', 'Sorry, I didn\'t get that. Please repeat your question.');
    },

    'AMAZON.HelpIntent': function () {
        this.emit(':ask', 'Follow the script.', 'try again');
    },

    'AMAZON.StopIntent': function () {
        var say = 'Adios Adrian';

        this.emit(':tell', say);
    }

};

// SAMPLE JSON INPUT

// {
//     "session": {
//         "new": true,
//             "sessionId": "SessionId.f3117e67-c428-46af-a37b-7997a084e934",
//                 "application": {
//             "applicationId": "amzn1.ask.skill.32f73371-3de1-4a20-86d8-c9537b76f196"
//         },
//         "attributes": { },
//         "user": {
//             "userId": "amzn1.ask.account.AHYQDNGCK6DAYCPHF2LRAF2C7PRSCLKMPRS4KUFCDPIDI3KO7PAKJZDVIBOAXBXZ6BIRICELZRJQKLD6OWZ2QW7RMVEGX7MYXVVFZBLLCPELTVLBRFCKYKJRYTOMCIPVNZWBZHAFFUVUAA6CGG7GIALG7NSZTTKKA5XYS2ZKEDMC7EFGTNTK25NDVGWLGDU3I3AHJG7A53WQO7Q"
//         }
//     },
//     "request": {
//         "type": "IntentRequest",
//             "requestId": "EdwRequestId.c1293994-1643-47fc-81d3-a1b0b5e495a7",
//                 "intent": {
//             "name": "TestIntent",
//                 "slots": { }
//         },
//         "locale": "en-US",
//             "timestamp": "2018-03-04T21:15:42Z"
//     },
//     "context": {
//         "AudioPlayer": {
//             "playerActivity": "IDLE"
//         },
//         "System": {
//             "application": {
//                 "applicationId": "amzn1.ask.skill.32f73371-3de1-4a20-86d8-c9537b76f196"
//             },
//             "user": {
//                 "userId": "amzn1.ask.account.AHYQDNGCK6DAYCPHF2LRAF2C7PRSCLKMPRS4KUFCDPIDI3KO7PAKJZDVIBOAXBXZ6BIRICELZRJQKLD6OWZ2QW7RMVEGX7MYXVVFZBLLCPELTVLBRFCKYKJRYTOMCIPVNZWBZHAFFUVUAA6CGG7GIALG7NSZTTKKA5XYS2ZKEDMC7EFGTNTK25NDVGWLGDU3I3AHJG7A53WQO7Q"
//             },
//             "device": {
//                 "supportedInterfaces": { }
//             }
//         }
//     },
//     "version": "1.0"
// }