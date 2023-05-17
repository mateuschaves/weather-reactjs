import { renderHook } from '@testing-library/react-hooks';
import { useLocation } from '../useLocation';

describe('useLocation', () => {
  beforeEach(() => {
    navigator.geolocation = {
      getCurrentPosition: jest.fn(),
    };
  });

  test('should set the initial location state', () => {
    const { result } = renderHook(() => useLocation());

    expect(result.current.location.loaded).toBe(false);
    expect(result.current.location.coordinates).toEqual({
      lat: -0.516089,
      lng: -1.12146,
    });
    expect(result.current.location.zoom).toBe(1);
  });

  test('should update the zoom value when setZoom is called', () => {
    const { result } = renderHook(() => useLocation());

    const newZoom = 10;
    result.current.setZoom(newZoom);

    expect(result.current.location.zoom).toBe(newZoom);
  });

  test('should update the location state on successful geolocation', async () => {
    const mockCoords = {
      latitude: 42.1234,
      longitude: -1.9876,
    };
    const mockPosition = {
      coords: mockCoords,
    };
    navigator.geolocation.getCurrentPosition.mockImplementation(
      (successCallback) => {
        successCallback(mockPosition);
      }
    );

    const { result, waitForNextUpdate } = renderHook(() => useLocation());

    await waitForNextUpdate();

    expect(result.current.location.loaded).toBe(true);
    expect(result.current.location.coordinates).toEqual({
      lat: mockCoords.latitude,
      lng: mockCoords.longitude,
    });
    expect(result.current.location.zoom).toBe(15);
  });

  test('should update the location state on geolocation error', async () => {
    navigator.geolocation.getCurrentPosition.mockImplementation(
      (_, errorCallback) => {
        errorCallback();
      }
    );

    const { result, waitForNextUpdate } = renderHook(() => useLocation());

    await waitForNextUpdate();

    expect(result.current.location.loaded).toBe(true);
    expect(result.current.location.coordinates).toEqual({
      lat: 0,
      lng: 0,
    });
    expect(result.current.location.zoom).toBe(15);
  });
});
