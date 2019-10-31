
<script >
    import {t} from './_store.js'

    let i = t.tabIndex;
    $i = 0;

</script>

This Button works:
<button on:click={()=> $i = $i == 0 ? 1 : 0}> Toogle</button>
<br>
<br>
Please visit general and membership page.
<br>
Navigating on pages store not update.