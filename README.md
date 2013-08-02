bitstarter
==========

more readme info coming soon!

### Requirements
- Use https://github.com/briansigafoos/setup/setup.sh if running dev environemnt from EC2
- Node Version Manager - https://github.com/creationix/nvm
    - curl https://raw.github.com/creationix/nvm/master/install.sh | sh
- Heroku Toolbelt - https://toolbelt.heroku.com
- rlwrap - http://nodejs.org/api/repl.html#repl_repl

### Deployment flow
    git checkout develop	 		        # switches to EX: develop
    git branch						            # shows branches
    git commit -a -m "fixed x bug"		# -all changed files -msg for commit
    git push origin develop			      # pushes develop branch to github
    git checkout staging				      # switches to staging
    git merge develop				          # merge changes from develop into staging
    git push origin staging
    git push staging-heroku staging:master
    git checkout master
    git merge master staging
    git push origin master
    git push production-heroku master:master