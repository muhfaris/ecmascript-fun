dont use the standart HTML tag there, but use indentation to structure document
## views
### layout.pug
this is based of layout, basic design which using in every template.

`title= title` = variabel `title` from `router/index.js`
if you look in thats file, there you find description of `title` variabel.

change to :
`title this title website`

### input
pug code :
`input(type='text' name='name-input').class-input#id-input`

html code:
``<input class="class-input" type="text" name="name-input" id="id-input">``


### variabel
if create new variabel in `pug`, must use `-` before initialize.
`- var condition =  true`
`- var list = ['1','2','3','4','5']`
