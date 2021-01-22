<script>

// let est_breaks = [0, 5, 10];

let tasks = 4;
let break_min = 5;

$: hours = Math.floor(minutes / 60);
$: minutes = (tasks * 20) + (tasks * break_min);

$: break_min_name = minutes > 1 ? "minutes" : "minute";

setInterval(() => {
	d = new Date();
}, 10000);

var d = new Date();
$: current_hour = d.getHours() > 12 ? d.getHours()-12 : d.getHours();
$: current_meridiem = d.getHours() > 12 ? "pm" : "am";
$: current_time = current_hour + ":" + d.getMinutes() + current_meridiem;

$: end_hour = d.getHours() > 12 ? d.getHours()-12 : d.getHours();
$: end_meridiem = d.getHours() > 12 ? "pm" : "am";
$: end_time = end_hour + ":" + d.getMinutes() + end_meridiem;



</script>

Tasks: <input bind:value={tasks}>

<br>

Break: <input bind:value={break_min}> {break_min_name}

<br>

Time: {hours}:{minutes-(hours*60)}

<br>

<!-- {new Date()} -->
{current_time} - {end_time}
