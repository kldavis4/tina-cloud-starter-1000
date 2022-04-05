# TLDR
- Need docs on how to use pagination / example (could also add it to the starter)

# Added 200 authors and 2k blog posts

## Initial impressions
- list in app page got very large (could hardly load)
- admin (CMS) is slow (in local)
- admin (CMS) has no pagination
- admin (CMS) has no sort

https://www.loom.com/share/faae2d15d4f34afd8ca6eac053417c8d

## Need to add pagination to the blog page

- Docs where not helpful

(attach two screenshots)


Luckily I can get by without docs

## Trying to use tina-cloud 

### Without indexing
- Did a local build
  - It was fast
- Tried to edit content with tina cloud and was not able to
  -  https://www.loom.com/share/1a03c77ea32942948bb6d41c35f8fca2


### With indexing

does not work got an error
```
Compilation failed with errors. Server has not been restarted. see error below 
 IO error: /Users/logananderson-forestry-mac/dev/tinacms/tina-cloud-starter-large/.tina/__generated__/db/000004.log: No such file or directory
Error [WriteError]: IO error: /Users/logananderson-forestry-mac/dev/tinacms/tina-cloud-starter-large/.tina/__generated__/db/000004.log: No such file or directory
    at /Users/logananderson-forestry-mac/dev/tinacms/tina-cloud-starter-large/node_modules/levelup/lib/levelup.js:216:23
✨  Done in 5.49s.
```