import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'ERP - Store Management System',
        description: "Me and my team built an Store Management System based on .Net Core 6, C#.Net, Jquery, Bootstrap. I have developed Multiple Rest API for the System on .Net 6, Typescript, OpenAI, Azure, and MSSql. Used Authentication IntraID for Azure Services, JWT authentication system. Built API with ERP Main MSSSQL database for Stores Users.",
        tools: ['.Net core 6', 'MSSQL DB', 'Azure Services', 'JQuery', 'Azure IntraID', '.NET Core MVC', 'Bootstrap', 'Admin Template', 'Azure APP Services', 'Azure CI/CD Pipeline', 'DevOps'],
        role: 'Full-Stack Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Public Website of Mr.Lube in Canada',
        description: 'I have designed and developed a full-stack web app for Mr.Lube Canada, a Retail Vehicles Services Provider for Tires and Oil Business. More than 200 Stores in all over Canada. I created the UI using template and .Net Core 6 Technology for development, Java Script, Bootstrap, CSS, Google Maps, Asp.net, and React Slick. The app supports multiple languages like French and English. I developed the API using RestSharp in C#.Net, Asp.net Core, MySQL, EntityFrame and ADO.Net, Azure, and Member Login services for Club Members. I deployed the front-end app to Azure app Services with back End Integration with CMS backoffice.',
        tools: ['.Net core 6', 'Bootstrap CSS', "Google Maps", "JavaScripting", "JQuery", "MySQL", "Amazon Services", "ASP.Net Idnetity", "Identity JWT Token service"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Mr. Lube Canada CMS Backoffice system',
        description: 'Built a .Net Core 6 based CMS for Coupon, Promotions Marketing system app using C#.net and .Net Core, API for Azure Single sign on and Authentication using Azure Services , Media Images and coupon generation images connected service from Azure Storage. We used Azure IntraID signIn, Azure Storage API services, .Net Core & ASp.Net MVC, MySql, and Integrate the Publish content with front end Website for stagging and Production. We utilized Azure Services, Storage API, Media uploading, and other npm libraries for the UI. We have managed to upload differnt media content through CMS and publish it first on staging server then final publish on Production using Azure app services Slots. System Architectire depends on Azure Dev,UAT and Production Slots in Azure and DevOp auto Deployed usind Azure CI/CD pipline confgiurations',
        tools: ['.Net 6', 'Bootstrap', 'CSS', 'Azure Idnetity single SignIn', 'Azure Storage Services', '.Net MVC', 'MySQL DB', 'Azure Blob', 'Azure Storage API', 'Integration Public Website uisng Azure Slots', 'Intigrate CMs with Store System', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Mr. Lube Stores Data to Google Services',
        description: "Management Stores Details data update to Google API Like Times, Store Location and Navigations. FrontEnd on .Net Core MVC using Jquery and Razor Views, Backend in .Net Core 6 with API integration with Google API to update Data like Timing , Store Locations, Navigations, Store Managment Services. Consume API using Rest api and given Token Credentials from Google Services",
        tools: ['.Net Core Web API', 'C#.Net', 'Jquery', 'MSSQL DB', "Google Services"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },