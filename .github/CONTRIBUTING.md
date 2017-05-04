# Contributing guidelines

Above all, follow the [development section](../README.md) in the readme file.

## Linters

Make sure all your code passes linting tests.
Lint errors are shown in the terminal during `npm run serve`, and in your editor if properly configured.

Fix any errors reported by the linters. Leave warnings to your own
consideration, but _do_ document them.

Document each and every instance where you disable a linter. _Disable linters
only for the relevant lines_.

## Commit messages

Your commit summary should be prefixed with a tag, depending on the type of contribution.

Use **only** the following tags in your commit messages (in brackets please,
_no colon after the tag_):

* **[docs]** for only documentation changes without any code changes
* **[page]** for changes to page components or new pages
* **[comp]** for changes to smaller components or new components
* **[style]** for CSS stylesheets changes or new ones
* **[asset]** for asset changes (only in `src/assets` or favicon)
* **[app]** for more general app maintenance changes, e.g. renaming/moving
files, refactoring components.
* **[test]** for testing changes only
* **[tool]** for changes related to build/dev tools, e.g. gulp, webpack, etc.
* **[chore]** for general repository changes and/or cleanup (e.g. gitignore)
* **[fix]** for other fixes that don't fall in one of the above categories

If a commit would cover two of the above cases (for example, a new page that
also uses a new component), split them into separate, focused commits instead.

**Do not** create commits just to fix conflicts from another branch. Instead,
rebase and fix conflicts during the rebase process.

## Branching

* All new branches are created from develop.
* Be sure to keep updated your local copy of develop branch.
* Create your new branch with the following name format

~~~
 taskid/yourinitials/brief-description
~~~


## Pull Requests

Send your pull requests to the `develop` branch.

Make sure that your branch is free of conflicts.

If your branch is out of date, prefer to use rebasing instead of merging from
master. This keeps history clean and linear:

~~~sh
$ git checkout master
$ git fetch upstream && git merge upstream/develop
$ git checkout $YOUR_BRANCH
$ git rebase develop
# Solve conflicts here as needed, use git rebase --continue when done
$ git push -f
~~~
