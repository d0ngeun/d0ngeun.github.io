<script>
    import Navbar from "../navbar/navbar.svelte"
</script>

<div class="header">
    <div class="header_name">
        <h1><a href="/">d0ngeun</a></h1>
    </div>
    <div class="header_navbar">
        <Navbar></Navbar>
    </div>
</div>

<style>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header_name a {
    color: black;
    text-decoration: none;
    display: flex;
    height: 45px;
    align-items: center;
    padding: 0 10px;
    font-size: 50px;
}
</style>