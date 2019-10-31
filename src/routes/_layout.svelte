<script>
    import {t} from './_store.js'
    const data = [
        {href: '/general', name: 'General'},
        {href: '/membership', name: 'Membership'},
    ];

    let i = t.tabIndex;
</script>


<div class="tabs tabs-wrapper top tabs-expand">
    <ul class="tabs-list">
        {#each data as d, index}
            <li style='{$i == index ? "color: green;" : ''}'>
                <a href={d.href} >{$i}{d.name}</a>
            </li>
        {/each}
    </ul>
</div>

<slot></slot>
