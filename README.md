# Stitching Sheets
MongoDB Stitch is an amazing Back-end as a Service that provides a framework for integrating services from virtually any publicly available API. I've written a bunch on this at MongoDB's Blog but in this [article](http://blog.mlynn.org/stitching-sheets), I'll share with you how easy it is to integrate data from Google Sheets into MongoDB using MongoDB Stitch.

[![Stitching Sheets](https://i.imgur.com/8SluAtz.png)](https://www.youtube.com/watch?v=UpOaUU2UQpA)

## Google Script ##
* [https://gist.github.com/mrlynn/0e2904376cd9e893ae5cec7207e5bcee](https://gist.github.com/mrlynn/0e2904376cd9e893ae5cec7207e5bcee)

There are two key elements that make this solution work. First, we have a Google Sheets script which runs from a menu item we add to the sheet. This script collects a row of data at a time and POSTs it to a MongoDB Stitch HTTP Service incoming webhook. The second is the function that runs when the webhook is called — this is where the data is received and inserted into a MongoDB Database Collection.

[![Stitching Sheets: Google Sheet](https://github.com/mrlynn/stitching-sheets/blob/master/images/sheets-stitch-slack.png?raw=true)](https://github.com/mrlynn/stitching-sheets/blob/master/images/sheets-stitch-slack.png?raw=true

Here's an [example spreadsheet](https://docs.google.com/spreadsheets/d/1NOeo12Rcc09j91kQgtRiGd7vMgbB3rrIcNJRDAoBKC8/edit?usp=drive_web&ouid=112239861731016170701) that contains data for my team's event tracking spreadsheet.

| Event                      | URL                          | Type       | Date Start  | Date End    | Location             | Status      | Owner |
|----------------------------|------------------------------|------------|-------------|-------------|----------------------|-------------|-------|
|                            |                              |            |             |             |                      |             |       |
| ChiHackNight               | https://chicagohacks.tech/   | Hackathon  | 01-Feb-2019 | 31-Dec-2019 | Chicago, IL          | Approved    | Bill  |
| PyTennessee                | https://www.pytennessee.org/ | Conference | 09-Feb-2019 | 10-Feb-2019 | Nashville, TN        | Approved    | Steve |
| HopHacks Spring 2019       | https://hophacks.com/        | Hackathon  | 15-Feb-2019 | 17-Feb-2019 | Baltimore, MD        | Deferred    | Jess  |
| BrickHack                  | https://brickhack.io/        | Hackathon  | 16-Feb-2019 | 17-Feb-2019 | Rochester, NY        | Deferred    | Dan   |
| HackIllinois               | https://hackillinois.org/    | Hackathon  | 22-Feb-2019 | 24-Feb-2019 | Urbana-Champaign, IL | Deferred    | Adam  |
| HackCU                     | https://hackcu.org/          | Hackathon  | 22-Feb-2019 | 23-Feb-2019 | Boulder, CO          | Declined    | Lisa  |
| hoohacks.io                | http://hoohacks.io/          | Hackathon  | 02-Mar-2019 | 03-Mar-2019 | Charlottesville, VA  | Researching | Susan |
| Confoo                     | http://confoo.ca             | FM Event   | 13-Mar-2019 | 15-Mar-2019 | Montreal, Canada     | Researching | Carey |
| API the Docs               | https://apithedocs.org/      | Conference | 15-Mar-2019 | 15-Mar-2019 | Chicago, IL          | Researching | Bill  |
| Game Developers Conference | http://gdconf.com            | Conference | 18-Mar-2019 | 22-Mar-2019 | San Francisco, CA    | Researching | Bill  |
| Boise Code Camp            | http://boisecodecamp.com/    | Conference | 23-Mar-2019 | 23-Mar-2019 | Boise, Idaho         | Researching | Eli   |


