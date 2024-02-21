document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', event => {
        event.preventDefault(); 
        
        const carMake = document.getElementById('carMake').value;
        const fuelType = document.getElementById('fuelType').value;
        const seats = document.getElementById('seats').value;
        const engine = document.getElementById('engine').value;
        const mileage = document.getElementById('mileage').value;
        
        let recommendation = `Based on your preferences:
        - Car Make: ${carMake}
        - Fuel Type: ${fuelType}
        - Number of Seats: ${seats}
        - Engine Size: ${engine} cc
        - Mileage: ${mileage} km`;
        
        alert(recommendation);
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
            form.style.padding = '10px';
        } else {
            form.style.padding = '20px';
        }
    });
});
