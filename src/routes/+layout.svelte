<script lang="ts">
	import 'remixicon/fonts/remixicon.css';
	import Drawer from '$root/lib/components/drawer.svelte';
	import Navbar from '$root/lib/components/navbar.svelte';
	import '../app.css';
</script>

<div class="min-h-screen">
	<Navbar />
	<Drawer>
		<slot />
	</Drawer>
</div>
