document.addEventListener("DOMContentLoaded", async function() {
    // ... (Código anterior)

    const payButton = document.getElementById("payButton");
    const paymentResult = document.getElementById("paymentResult");

    payButton.addEventListener("click", async function() {
        try {
            // Crear la transacción
            const transaction = new solana.Transaction().add(
                solana.SystemProgram.transfer({
                    fromPubkey: wallet.publicKey,
                    toPubkey: new solana.PublicKey("DirecciónDeSolanaDestino"),
                    lamports: solana.LAMPORTS_PER_SOL * 0.1,  // Monto de la transacción (0.1 SOL en este ejemplo)
                })
            );

            // Firmar y enviar la transacción
            const signature = await solana.sendTransaction(transaction, [wallet]);

            // Mostrar el resultado del pago
            paymentResult.textContent = `Pago exitoso! Tx: ${signature}`;
        } catch (error) {
            // Manejar errores
            console.error("Error al procesar el pago:", error);
            paymentResult.textContent = "Error al procesar el pago. Consulta la consola para más detalles.";
        }
    });
});
