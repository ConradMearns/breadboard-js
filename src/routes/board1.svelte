<script>
    import {slide} from 'svelte/transition';
    

    function localeMonth(mon) {
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][mon];
    }
    let month = new Date().getMonth();

    let data = {
        0: [
            {day: 1, status: 'x'},
            {day: 3, status: 'x'},
            {day: 4, status: 3}
        ]
    }

</script>

<!-- 

Display the Current Month as h1
Display a list of 'habits'
Each Habit is a Title, followed by 31 square checkboxes

 -->

<h1>
    {localeMonth(month)}</h1>

<!-- {#each data[month] as day} -->
    <!-- {JSON.stringify(day)} -->
    <!-- <br> -->
<!-- {/each} -->


<hr>
<pre>
    {JSON.stringify(data[month])}</pre>

