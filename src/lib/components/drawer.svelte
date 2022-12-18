<div class="drawer drawer-mobile">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col items-center justify-center">
		<slot />
	</div>

	<div class="drawer-side">
		<label for="my-drawer-2" class="drawer-overlay" />
		<ul class="menu p-4 w-80 bg-base-100 text-base-content border">
			<!-- Sidebar content here -->
			<li><a>Sidebar Item 1</a></li>
			<li><a>Sidebar Item 2</a></li>
		</ul>
	</div>
</div>
