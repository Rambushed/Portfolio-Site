<script>
    import BellGong from '$lib/assets/BellGong.png'
</script>
<main>
<a href="/" class = "btn back">Back</a>
    <h1>Rambush</h1>
    <h2>Portfolio</h2>
    <hr>

    <h3>Pi-hole, Unbound and Optus</h3>
    <a href="https://bellandgong.com" target="_blank">
        <img class="hero" src={BellGong} alt ="Bell & Gong Vineyard"/>
    </a>
    <h4>Raspberry-pi ad blocker and DNS using unbound</h4>

    <p>There are countless guides for setting up a raspberry-pi with Pi-hole and unbound, however there aren't as many that outline the issue Optus customers may face in the process.</p>
   
    <p>This was my first Raspberry-pi project, what should have taken less than an hour ended in hours of battling my Optus modem.</p>

    <h5>DNS Police</h5>
    <p>A DNS is</p>

    <p>Optus hardware is notoriously bad for customization and modification, after configuring my Raspberry-pi zero 2w with Pi-hole, all i needed to do was go into my modem dashboard, disable the modems default DNS then set the newly configured Pi's IP as the new DNS provider so that Pi-hole could work its ad blocking magic.</p>

    <p>This turned out to be impossible, most Optus modems actively prevent you from configuring a custom DNS address by making the address input sections of the DNS settings unusable. the Pi needs to be used as the network DNS for pi-hole to actually work, this was an issue.</p>

    <p>After some digging i found 2 different users that have solved similar issues by using Pi-hole as the network DHCP server and circumventing DHCP input from the modem entirely.</p>

    <h5>DHCP </h5>
   
    <a href="https://bellandgong.com" target="_blank" class = "btn">Visit Bell & Gong</a>
</main>