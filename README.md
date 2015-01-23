# showOther.js

You know how you have a `<select>` dropdown with an "Other" option so the user can enter fill in their own answer? This is a tiny jQuery plugin for that. When the configured option is selected, it'll toggle a class on some other element (e.g., a text input) that you can show/hide via CSS.

## Example markup

```html
<select name="colors" class="js-show-other" data-option-value="other" data-target-element="other-color">
    <option value="red">Red</option>
    <option value="blue">Blue</option>
</select>

<input id="other-color" name="color" type="text">

<script src="path/to/jquery.showOther.js"></script>
<script>
    $('.js-show-other').showOther();
</script>
```
