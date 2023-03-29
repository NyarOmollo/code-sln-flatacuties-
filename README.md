# code-sln-flatacuties-
# Using JSON Server and Postman to Mock Client/Server Communication

This repository entails implementing a mini web app to applly array iteration, DOM, Events and Server communications. For this challange we will be working on Flatacuties, an app to vote for the cutest animal.

## Setting up JSON Server

To provide a basic set of data.

First, install JSON Server globally on the machine:

```console
$ npm install -g json-server
```


Next, create a file acting as our data storage.

```console
$ touch db.json
```

Open this file in the text editor and paste in the following content:

```json
{
"characters": [
        {
          "id": 1,
          "name": "Mr. Cute",
          "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
          "votes": 0
        },
        {
          "id": 2,
          "name": "Mx. Monkey",
          "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
          "votes": 0
        },
        {
          "id": 3,
          "name": "Ms. Zebra",
          "image": "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
          "votes": 0
        },
        {
          "id": 4,
          "name": "Dr. Lion",
          "image": "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
          "votes": 0
     }
  ]
}
```

## Start the Server

Run the following command from the same directory that `db.json` is in:

```console
$ json-server --watch db.json
```
to see this

  Resources
  http://localhost:3000/characters

  Home
  http://localhost:3000

On the db.json are;

```json
[
  {
  "characters": [
    {
      "id": 1,
      "name": "Mr. Cute",
      "image": "https://thumbs.gfycat.com/EquatorialIckyCat-max-1mb.gif",
      "votes": 0
    },
    {
      "id": 2,
      "name": "Mx. Monkey",
      "image": "https://thumbs.gfycat.com/FatalInnocentAmericanshorthair-max-1mb.gif",
      "votes": 0
    },
   {
      "id": 5,
      "name": "Mme. Panda",
      "image": "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif",
      "votes": 0
    },
    {
      "id": 3,
      "name": "Ms. Zebra",
      "image": "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
      "votes": 0
    },
    {
      "id": 4,
      "name": "Dr. Lion",
      "image": "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif",
      "votes": 0
    },
 ]}
 ];
```


We can go even further — notice the `"id"` key that is listed. Instead of just
going to `/characters`, we can append the value of `"id"` to the end of the URL:

```text
http://localhost:3000/characters/1
```

## Retrieving Data from our JSON Server using Postman

Here, we'll write in the URL we previously used to get our JSON server data,
`http://localhost:3000/characters/1`.


Once entered, hit the **Send** button. If everything is working, you should see
the same article data from earlier, an object with three keys: `"id"`,
`"title"`, and `"content"`. 

## Sending Data to our JSON Server from Postman
To send data to our server, first, we need to switch our Postman request from
GET to POST. Click on GET and switch over to POST.

Second, we need to adjust the URL we're using to;

```txt
http://localhost:3000/characters
```
Lastly In Postman, just below the URL bar, click the **Body** tab, then choose
the **raw** option, and select **JSON** from the drop-down menu.
In the code box just below these options, write in the following JSON:

```json
{
"name": "Ms. Zebra",
"image": "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif",
"votes": 0
}
```
click **Send**.

Navigate to your `db.json` file and open it up,t the file has changed to include the newly submitted content!

## Resources

- [JSON Server][json server]
- [Postman][postman]
- [HTTP Status Codes][status]
- [Representational State Transfer (REST)][rest]
