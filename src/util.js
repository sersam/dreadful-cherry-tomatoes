const orderDataByReleaseYear = (data) => {
    data.sort((a, b) => {
        const releaseDateA = a.releaseYear;
        const releaseDateB = b.releaseYear;
        if (releaseDateA < releaseDateB) {
            return 1;
        }
        if (releaseDateA > releaseDateB) {
            return -1;
        }

        return 0;
    });
}


export { orderDataByReleaseYear }