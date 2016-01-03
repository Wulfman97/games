require 'test_helper'

class Magic8BallControllerTest < ActionController::TestCase
  test "should get show" do
    get :show
    assert_response :success
  end

end
