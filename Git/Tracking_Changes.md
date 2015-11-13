# Tacking changes

With your local repository set up and plugged into your remote repository at Github.com, you're ready to start tracking changes to your project.

Everything we have done to this point has been setup-related changes that you only do once when starting a new project. Everything that follows reflects the kind of git work you'll do on a day-to-day basis.

Within your `hello-world` directory, run `git status` to see what changes git has tracked:

```bash
$ git status
```

At this point, you should have one untracked file&mdash; the `README.md` file.

Stage (aka `add`) this new file with the following command:

```
$ git add README.md
```

Now, try `git status` again, and you should see you have a file waiting to be committed:

```
$ git status
```

Next, commit this change using the `commit` command, plus the `-m` flag which indicates we'll also be including a commit message:

```bash
$ git commit -m "Add README file."
```

Finally, push this change to Github.com.

```bash
$ git push origin master
```

To double check your commit made it to Github.com, look for your new `README.md` file on Github.com:




## Practice

Edit your `README.md` file adding the date to the top of the file.

Also, add a new file called `index.php` and include this code:

```html
<h1>Hello World!</h1>
```

Now lets track these changes in Github (one edit of an existing file, one new file).

You can stage the files one at a time:

```bash
$ git add README.md
$ git add index.php
```

Or you can use this command to stage any changed or new files:

```bash
$ git add --all
```

Once your changes are staged, commit:

```bash
$ git commit -m "Update README file; add index file."
```

And finally, push your commit:

```bash
$ git push origin master
```

Check your repository in github.com to make sure the commit is there.



## Recap

1. Make changes on a local copy of your code
2. Save changes
3. Test your work via your local server, is everything good?

Steps 1,2,3 repeat over and over until the feature or change you're working on is ready.
When everything is set and you're ready to go live...

4. __Stage__ individual files that have changed
5. __Commit__ everything you staged
6. __Push__ your commits to Github



## Tips

* If you get a message about `src refspec master does not match any.` after trying to push&mdash; it means you have not yet done a commit.

* `git status` is a command you should take advantage of frequently; it will give you a sense of what's going on your repository: what has changed, if any files are untracked, etc.

* `git diff` is another useful command to show what changes have been made. You can see all changes with just `git diff` or see just the changes on a particular file with `git diff <file>`.

* If you want to undo changes made to a file that haven't yet been staged, you can use the command `git checkout <file>`.

* If you stage a file but decide you want to unstage it, run this command: `git reset HEAD <file>`. This won't revert any changes to that file (that's what `checkout` does), it will just remove it from the stage.

* If you delete a file from a project, you'll use the `git rm <file>` command instead of `git add <file>`.
