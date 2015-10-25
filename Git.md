# Git

As I mentioned Git is source or version control in software development. It is very important for not only keeping a master copy of our code but also allows for easier collaboration among all of us on the project.

To walk you through some of the key commands you will need to know, let's walk through an example.

For the following scenario, we're going to create a new project called `hello-world` which we will initiate as a git repository and track on Github.com.

## Set up your practice project

Create a new directory in the document root of your local server called `hello-world`.

Within this directory, create a new file called `README.md` with the following contents:

```markdown
# Hello World

Just for practice
```


## Initiate your repository

From command line, within your `hello-world` directory, run the command `git init`.

For example:

```bash
$ cd /Desktop/hello-world
$ git init
Initialized empty Git repository in /Users/RichardHsu/Sites/hello-world/.git/
```


## Create a new remote repository on Github.com

Now, let's create a home for this project on Github.com.

In Github, create a __New Repository__ called `hello-world`.

After your repository is created, copy the SSH URL for your repository at Github.

## Connect your local repository to your remote repository

Returning to command line on your computer, run this command, replacing the SSH URL with the one you copied in the above step:

```bash
$ git remote add origin git@github.com:username/hello-world.git
```

This will create a connection between your local repository and the remote repository at Github.com. `origin` is the nickname we're giving this connection, which is a common nickname used for your primary, remote repository.

You can use this command to verify your remote was added:

```bash
$ git remote -v
```

Example results:

```bash
origin	git@github.com:RichardHsu/hello-world.git (fetch)
origin	git@github.com:RichardHsu/hello-world.git (push)
```

That's it for setting up your remote repository. Next, we'll start pushing changes to this repository.


## Tips

* If you decide to remove an existing remote use this command: `git remote remove name-of-remote`.

* If you decide to update the URL for an existing remote, use this command: `git set-url name-of-remote new-remote-url`.

* To see a list of all current remotes use this command: `git remote -v`.

* To see all your git configurations use this command: `git config --list`.

* You can tell if a directory is set up as a git repository if it contains a hidden directory called `.git`.

* All the git configurations for a given repository are stored in this `.git` directory, in a filed called `config`. You can edit your configurations via git commands, or by editing this file directly.

* Need to &ldquo;un-git&rdquo; a directory? All you have to do is delete the hidden `.git` directory.
