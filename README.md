# memory-leak-test-case
A test case for mapbox gl.

## problem
`mapbox-gl` does not the free memory when call `map.removeSource` or `map.removeLayer` or `GeoJSONSource#setData`，after a long time call `GeoJSONSource#setData`，the memory woule be in heavily used.

## screenshot

1. before
    ![初始化](https://raw.githubusercontent.com/wandergis/memory-leak-test-case/master/screenshot/1.png)
2. after
    ![第二次](https://raw.githubusercontent.com/wandergis/memory-leak-test-case/master/screenshot/2.png)
3. again
    ![第三次](https://raw.githubusercontent.com/wandergis/memory-leak-test-case/master/screenshot/3.png)
