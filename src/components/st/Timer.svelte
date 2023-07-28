<script>
  import { time, elapsedSeconds } from "../../store/stores.js";

  const dateFormatter = new Intl.DateTimeFormat("en", {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
  });
</script>

<h1 class="text-gray-50 text-2xl font-bold text-center">
  Store time is {dateFormatter.format($time)}
</h1>
<h1 class="text-gray-50 text-2xl font-bold text-center">
  Store see in {$elapsedSeconds} seconds
</h1>
