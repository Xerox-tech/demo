function showDetail(detailType) {
    const detailTitle = document.getElementById('detail-title');
    const detailInfo = document.getElementById('detail-info');
    const detailSection = document.getElementById('detail');
    const homeSection = document.getElementById('home');

    homeSection.classList.remove('active'); // Hide home
    detailSection.classList.add('active'); // Show detail

    // Set content based on clicked button
    switch (detailType) {
        case 'name':
            detailTitle.innerText = 'Name';
            detailInfo.innerText = 'Name: Kawsar Ali Ripon';
            break;
        case 'education':
            detailTitle.innerText = 'Educational Background';
            detailInfo.innerText = 'Details about your education.';
            break;
        case 'contact':
            detailTitle.innerText = 'Contact';
            detailInfo.innerText = 'Email: your.email@example.com';
            break;
        case 'skills':
            detailTitle.innerText = 'Skills';
            detailInfo.innerText = 'List of your skills.';
            break;
        case 'experience':
            detailTitle.innerText = 'Experiences';
            detailInfo.innerText = 'Details about your experiences.';
            break;
    }

    // Fade in content
    detailInfo.classList.add('fade-in');
}

function goBack() {
    const detailSection = document.getElementById('detail');
    const homeSection = document.getElementById('home');

    detailSection.classList.remove('active'); // Hide detail
    homeSection.classList.add('active'); // Show home
}
