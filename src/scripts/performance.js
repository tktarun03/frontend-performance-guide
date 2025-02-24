function testPerformance() {
    console.log('Testing Frontend Performance...');
    console.time('Load Time');
    
    setTimeout(() => {
        console.timeEnd('Load Time');
        console.log('Performance test completed!');
    }, 1000);
}