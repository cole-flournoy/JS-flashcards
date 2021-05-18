class GroupsController < ApplicationController
  def index 
    render json: Group.all
  end

  def create 
    group = Group.new(group_params)
    if group.save
      render json: group
    else
      render json: {error: group.errors.full_messages}
    end
  end 

  private

  def group_params
    params.require(:group).permit(:name)
  end 
end
