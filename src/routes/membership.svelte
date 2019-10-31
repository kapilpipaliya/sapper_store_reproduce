
<script >
    import {t} from './_store.js'

    let i = t.tabIndex;
    $i = 1;

</script>


<button on:click={()=> $i = $i == 0 ? 1 : 0}> Toogle</button>
