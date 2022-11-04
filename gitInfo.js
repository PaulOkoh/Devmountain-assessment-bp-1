/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition =
  "Git is a program you can install on your computer that allows tracking of changes made to code projects. It takes snapshots of changes as they are made during a project. Git is also referred to as a version control system, you can view the whole history of the project and different individuals or teams can contribute to same project. A projects in git is called a repository;";

console.log(gitDefinition);

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition =
  "Website where git repositories are stored. Repositories can be uploaded and downloaded from GitHub. GitHub could be referred to as a cloud service for git repositories";

console.log(gitHubDefinition);
//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE

let gitInitDefinition =
  "git init initializes a local repository by adding a '.git' tag to that repository, this allows changes made to the repository to be tracked by git.";

console.log(gitInitDefinition);

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

let gitCloneDefinition =
  "'git clone' copies a repository from git hub and puts that repository on your local machine / computer";

console.log(gitCloneDefinition);

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE

let gitStatusDefinition =
  "Gives a summary of the state of a repository, shows which changes have been staged";

console.log(gitStatusDefinition);

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE

let gitAddDefinition =
  "'git add' adds  updated/modified files to the staging area awaiting the 'git commit'";

console.log(gitAddDefinition);

let gitAddCode = "git add .";

console.log(gitAddCode);

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE

let gitCommitDefinition =
  "Creates a snapshot of the changes that have been made to files that are being tracked by git";

console.log(gitCommitDefinition);

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

let gitPushDefinition = " Transfers commits from your local machine to GitHub";

console.log(gitPushDefinition);
