# Contributing

The contribution process for this repository iis formalised to maintain a clean version control history and also, provide you as much learning about contributing to other open source repositories as possible.

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change.

## Raising Issues

Whenever you want some change in the code, you raise issue.
Issues can be of multiple types. But majorly, they are of two types:
- Bug Report: You raise this type of issue whenever you think there is a bug with the code or unexpected behaviour and it needs to be fixed.
- Feature Request: You raise this type of issue whenever you think of some new functionality or enhancement that can be added to the coded.

So, if you go to the issues tab, github will prompt you to choose the issue type. Please choose the rightful issue type accordingly.

Then, on the basis of the issue type, you picked up, you have to explain about the issue. Things like "What do you expect", "What did you face", etc. No worries, you will be provided with the template for that which will involve all these questions when you pick up the issue type.

Also, optionally, you can add labels to it.
So, issues can be categorised even further categories. Let me give an example.
So, under Feature Request, there are multiple possible changes possible:
- Adding something to the documentation.
- Cleaning up a piece of code.
- Actually, adding a new feature.
- etc. etc.

So, to convey that, you attach labels to your issues.

When you fill out those questions in the issue template, then, under that, there is an option to choose the labels for this issue.

So, say if my issue targets towards changing the documentation, then my issue type will be "Feature Request" and label will be "documentation".

**Also, an issue can have multiple labels depending on its coverage.**

The use of labels is that, when you go into the issues tab in the repository's home page, you might want to get only a list of issues which correspond to "documentation" change (or some other filter).

So, with labels, you can filter and list only the issues which are labeled with "documentation".

By the way, for contributing to new open source project,

there is a practice of having labels with the name "good first issue" which clearly indicates that the issue is easy to resolve and is good for new comers/contributors to look forward to.

The reason for keeping this label type is because some issues are too complicated for new comers to solve, so there is no point approaching them as a new comer.

** So, while starting to contribute to this repository, you can just go to issues tab and filter issues on the basis of "good first issue" label and pick some issue which looks nice and start working on it **

## Pre-Pull Request Process (Choosing what you want to work on)

Now, say you want to start contributing to the project.

For that, head over to the "issues" tab and it will list the current open issues for the repository.

If you are a new comer, then filter the issues on the basis of the "good first issue" label although, most of the non-"good first issue" will be easy to resolve too because this repository is meant to be easy and convenient to contribute to.

So, after choosing the issue, click on it, and comment under it saying that you want to work for it.

**At the same page of that issue, Around the top right corner, there is a section named "Assignees". Under it, add your name, to officially assign yourself that issue**

This is because someone else might also look forward to contributing to that issue but then, there won't be no point for them because you are already going to be working on it.

## Pull Request Process

TL,DR; if you are versed with raising PRs, then, I have written shortened steps for you:
1. Fork the repo.
2. Clone the forked repo locally.
3. Create a new branch `issue-<issue number>/<title>` and work on it and push the changes.
4. Raise a PR from your forked repository.

--------

**Now, if you are not versed with PR process, here, is a step by step guide for you :)**

1. Fork this repository. This will create a copy of this repository under your account.
2. Clone the **forked** repository in your computer (The one created under your account)
```sh
git clone https://github.com/<your-username>/nail-hacktoberfest
```
OR
```sh
git clone git@github.com:<your-username>/nail-hacktoberfest
```
3. Just to confirm step 2., go into your cloned repository and enter `git remote -v` to check whether the "origin" URL points to `https://github.com/<your-username>/nail-hacktoberfest` or not.
4. Now, currently, locally, you will under master branch. So, create a new branch and shift to it.
```sh
git checkout -b <branch-name>
```
the `-b` tells git to create the branch. If the branch already exists and you just want to switch to it, then do NOT enter the `-b` flag.
5. Please choose the name of the branch wisely. It should be ideally in the form
```
issue-<issue number>/<title, where words are separated by dash>
```
So, for example, there is a issue which state a change in README's title and say I want to contribute to it. And that issue's number is 42.
Then, I should name my branch on which I am going to be work as
```sh
issue-42/change-readme-title
```
6. Now, work on this branch. Code and do the magic.
7. When, you are happy with your changes, just commit them and push them.
```sh
git push origin <branch-name>
```
Now, these changes will reach only to **your forked repository.** But well, you want these changes to reach to the main repository where you want to actually contribute to.
8. For that raise a pull request.

9. For doing that, head over to **your forked repository's** webpage (@ https://github.com/<your-username>/nail-hacktoberfest) and from master, switch over to the branch you pushed your code to.
10. Now, there will be a button around titled "Compare and Pull Request". Click on it.
11. The Pull Request dialog will open. 
12. Please give a meaningful title to the Pull Request and under description, please give a comprehensive explanation of your work (Pull Request) and **Link the issue which that PR resolves by typing #<issue-number>. For example, if your PR resolves issue number 42, then, enter this: #42 , under the PR description**
13. And finally, click on the "Create Pull Request" button.
14. Your Pull Request will be successfully created.
15. You can check that under the main repository's Pull Request tab (https://github.com/yashvardhan-kukreja/nail-hacktoberfest). It will be listed there.

## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

* Using welcoming and inclusive language
* Being respectful of differing viewpoints and experiences
* Gracefully accepting constructive criticism
* Focusing on what is best for the community
* Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

* The use of sexualized language or imagery and unwelcome sexual attention or
advances
* Trolling, insulting/derogatory comments, and personal or political attacks
* Public or private harassment
* Publishing others' private information, such as a physical or electronic
  address, without explicit permission
* Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at yash.kukreja.98@gmail.com. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

### Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
available at [http://contributor-covenant.org/version/1/4][version]

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/4/