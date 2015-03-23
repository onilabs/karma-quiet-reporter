A quiet reporter for [karma](http://karma-runner.github.io/).

The builtin `progress` reporter is nice, and it maintains a running
status line for each browser, like:

    PhantomJS 1.9.7 (Linux): Executed 27 of 27 SUCCESS

This is cool, but if you're not running in a real terminal (e.g
travis-ci), you'll get status lines smattered across your logs.

This reporter just prints one status line, at the end of each browser run.
