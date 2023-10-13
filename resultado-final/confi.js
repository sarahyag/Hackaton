document.addEventListener("DOMContentLoaded", async function() {
    // Conectar con la billetera Phantom
    const wallet = new Wallet(window.solana);

    try {
        // Intentar conectar
        await wallet.connect();

        // Acceder a la dirección de la billetera
        const publicKey = wallet.publicKey;

        console.log(`Conectado a Phantom con la dirección: ${publicKey.toBase58()}`);

        // Puedes utilizar publicKey en tu lógica de pago
        // ...

    } catch (error) {
        console.error("Error al conectar con Phantom:", error);
    }
});
