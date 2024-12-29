const faceShapes = document.querySelectorAll('.face-shape');
const getRecommendationButton = document.getElementById('get-recommendation');
let selectedShape = null;

faceShapes.forEach(shape => {
    shape.addEventListener('click', () => {
        // Hapus kelas aktif dari semua elemen bentuk wajah
        faceShapes.forEach(s => s.classList.remove('active'));

        // Tambahkan kelas aktif pada elemen yang diklik
        shape.classList.add('active');

        // Perbarui bentuk wajah yang dipilih
        selectedShape = shape.getAttribute('data-shape');

        // Aktifkan tombol
        getRecommendationButton.disabled = false;
    });
});

getRecommendationButton.addEventListener('click', () => {
    if (selectedShape) {
        // Redirect ke halaman berdasarkan bentuk wajah yang dipilih
        switch (selectedShape) {
            case 'oval':
                window.location.href = 'rec_oval.html';
                break;
            case 'heart':
                window.location.href = 'rec_heart.html';
                break;
            case 'round':
                window.location.href = 'rec_round.html';
                break;
            case 'square':
                window.location.href = 'rec_square.html';
                break;
            case 'diamond':
                window.location.href = 'rec_diamond.html';
                break;
            case 'triangle':
                window.location.href = 'rec_triangle.html';
                break;
            default:
                alert('Invalid selection!');
        }
    }
});
